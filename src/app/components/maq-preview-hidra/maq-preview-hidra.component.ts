import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HidraService } from '../../services/hidra.service';
import { Hidraulica } from '../../interfaces/Hidraulica';
import {SolicitudService} from '../../services/solicitud.service';
import {SolicitudModel} from '../../models/solicitudModel';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {HidraulicaModel} from '../../models/HidraulicaModel'

@Component({
  selector: 'app-maq-preview-hidra',
  templateUrl: './maq-preview-hidra.component.html',
  styleUrls: ['./maq-preview-hidra.component.css']
})
export class MaqPreviewHidraComponent implements OnInit {

  hidra: Hidraulica;
  public id: string;
  public fecha:Date = new Date();
  public isError=false;
  public cotizacion: SolicitudModel;
  public hidraClass: HidraulicaModel;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private hidraService: HidraService,
    private solicitudService: SolicitudService,
    private ngxSmartModalService: NgxSmartModalService) { 
      this.cotizacion = new SolicitudModel('','','','');
      this.hidraClass = new HidraulicaModel('','','','','','','','','','','');
    }


  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.hidraService.getHidra(this.id)
        .subscribe(
          res => {
            this.hidra = res;
            this.hidraClass.nombre = res.nombre;
            this.hidraClass.modelo = res.modelo;
            this.hidraClass.marca = res.marca;
            this.hidraClass.descripcion = res.descripcion;
            this.hidraClass.imgUrl = res.imgUrl;
            this.hidraClass.cauMax = res.caracteristica.cauMax;
            this.hidraClass.altMax = res.caracteristica.altMax;
            this.hidraClass.potMax = res.caracteristica.potMax;
            this.hidraClass.sucDes = res.caracteristica.sucDes;
            this.hidraClass.sucMax = res.caracteristica.sucMax;
            this.hidraClass.volt = res.caracteristica.volt;

          },
          err => console.log(err)
        )
    });
  }

  testForm(formCoti){

    if(formCoti.valid){
      this.isError=false;
      this.uploadSolicitud(
        this.cotizacion.nombre,
        this.cotizacion.email,
        this.cotizacion.telefono,
        this.cotizacion.ciudad,
        this.id,
        'hidra',
        this.fecha);
      this.ngxSmartModalService.getModal('myModal').open();
      formCoti.reset();
    }else{
      console.log('no valido');
      this.isError=true;
    }
  }

  uploadSolicitud(
    nombre: string,
    email: string,
    telefono: string,
    ciudad: string,
    idMaquina: string,
    tipoMaquina: string,
    fechaCotizacion: Date
  ){
    this.solicitudService.createSolicitud(
      nombre,
      email,
      telefono,
      ciudad,
      idMaquina = this.id,
      tipoMaquina = 'hidra',
      fechaCotizacion = this.fecha
      
    ).subscribe(res => {console.log('respuesta'); console.log(res);}, err => console.log(err));

  }

}


