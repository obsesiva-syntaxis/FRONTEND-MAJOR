import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HidraService } from '../../services/hidra.service';
import { Hidraulica } from '../../interfaces/Hidraulica';
import {SolicitudService} from '../../services/solicitud.service';
import {SolicitudModel} from '../../models/solicitudModel';
import { NgxSmartModalService } from 'ngx-smart-modal';

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

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private hidraService: HidraService,
    private solicitudService: SolicitudService,
    private ngxSmartModalService: NgxSmartModalService) { 
      this.cotizacion = new SolicitudModel('','','','');
    }


  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.hidraService.getHidra(this.id)
        .subscribe(
          res => {
            this.hidra = res;
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


