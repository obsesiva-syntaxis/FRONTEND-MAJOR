import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Solar} from '../../interfaces/Solar';
import {SolarService} from '../../services/solar.service';
import {SolicitudService} from '../../services/solicitud.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {SolicitudModel} from '../../models/solicitudModel';
import {SolarModel} from '../../models/SolarModel'


declare var $:any;

@Component({
  selector: 'app-maq-preview-solar',
  templateUrl: './maq-preview-solar.component.html',
  styleUrls: ['./maq-preview-solar.component.css']
})
export class MaqPreviewSolarComponent implements OnInit {

  solar: Solar;
  public id: string;
  public fecha:Date = new Date();
  public isError=false;
  public cotizacion: SolicitudModel;
  public solarClass: SolarModel;


  constructor(
    private activatedRouter: ActivatedRoute,
    private router:Router, private solarService:SolarService,
    private solicitudService: SolicitudService,
    private ngxSmartModalService: NgxSmartModalService
    ){
        this.cotizacion = new SolicitudModel('','','','');
        this.solarClass = new SolarModel('','','','','');
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.id = params['id'];
      this.solarService.getSolar(this.id)
        .subscribe(
          res => {
            this.solar = res;
            this.solarClass.nombre = res.nombre;
            this.solarClass.modelo = res.modelo;
            this.solarClass.marca = res.marca;
            this.solarClass.imgUrl = res.imgUrl;
            this.solarClass.descripcion = res.descripcion;
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
        'solar',
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
      tipoMaquina = 'solar',
      fechaCotizacion = this.fecha
      
    ).subscribe(res => {console.log('respuesta'); console.log(res);}, err => console.log(err));

  }

}
