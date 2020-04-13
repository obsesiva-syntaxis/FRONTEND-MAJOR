import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MaquinaService } from '../../services/maquina.service';
import { Maquina } from '../../interfaces/Maquina';
import {SolicitudService} from '../../services/solicitud.service'
import { SolicitudModel } from '../../models/solicitudModel';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {MaquinaModel} from '../../models/MaquinaModel'

@Component({
  selector: 'app-maq-preview',
  templateUrl: './maq-preview.component.html',
  styleUrls: ['./maq-preview.component.css']
})
export class MaqPreviewComponent implements OnInit {

  maquina: Maquina;
  public id: string;
  public fecha:Date = new Date();
  public isError=false;
  public cotizacion: SolicitudModel;
  public maquinaClass: MaquinaModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private maquinaService: MaquinaService,
    private solicitudService: SolicitudService,
    private ngxSmartModalService: NgxSmartModalService
    ) { 
      this.cotizacion = new SolicitudModel('','','','');
      this.maquinaClass = new MaquinaModel('','','','','','','','','','');
    }

  
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.maquinaService.getPhoto(this.id)
        .subscribe(
          res => {
            this.maquina = res;
            this.maquinaClass.nombre = res.nombre;
            this.maquinaClass.marca = res.marca;
            this.maquinaClass.modelo = res.modelo;
            this.maquinaClass.imgUrl = res.imgUrl;
            this.maquinaClass.descripcion = res.descripcion;
            this.maquinaClass.partida = res.caracteristica.partida;
            this.maquinaClass.potCont = res.caracteristica.potCont;
            this.maquinaClass.potMax = res.caracteristica.potMax;
            this.maquinaClass.combustible = res.caracteristica.combustible;
            this.maquinaClass.fases = res.caracteristica.fases;
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
        'gen',
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
      tipoMaquina = 'gen',
      fechaCotizacion = this.fecha
      
    ).subscribe(res => {console.log('respuesta'); console.log(res);}, err => console.log(err));

  }

}
