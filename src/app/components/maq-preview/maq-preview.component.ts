import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MaquinaService } from '../../services/maquina.service';
import { Maquina } from '../../interfaces/Maquina';
import {SolicitudService} from '../../services/solicitud.service'
import { SolicitudModel } from '../../models/solicitudModel';
import { NgxSmartModalService } from 'ngx-smart-modal';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private maquinaService: MaquinaService,
    private solicitudService: SolicitudService,
    private ngxSmartModalService: NgxSmartModalService
    ) { this.cotizacion = new SolicitudModel('','','','') }

  
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.maquinaService.getPhoto(this.id)
        .subscribe(
          res => {
            this.maquina = res;
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
