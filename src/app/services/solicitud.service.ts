import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitud } from '../interfaces/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  // URI = 'http://localhost:3000/MajorRestApi/sol';
  URI = 'http://165.227.194.14/MajorRestApi/sol';

  constructor(private http:HttpClient) { }

  createSolicitud(
    nombre: string,
    email: string,
    telefono: string,
    ciudad: string,
    idMaquina: string,
    tipoMaquina: string,
    fechaCotizacion: Date
  ){
    // const fd = new FormData();
    // fd.append('nombre', nombre);
    // fd.append('email', email);
    // fd.append('telefono', telefono);
    // fd.append('ciudad', ciudad);
    // fd.append('idMaquina', idMaquina);
    // console.log(fd);
    const json = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      ciudad: ciudad,
      idMaquina: idMaquina,
      tipoMaquina: tipoMaquina,
      fechaCotizacion: fechaCotizacion
    }
    console.log('json');
    console.log(json);
    return this.http.post(this.URI, json);
  }

}
