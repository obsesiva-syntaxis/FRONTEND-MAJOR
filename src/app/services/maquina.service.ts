import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maquina } from '../interfaces/Maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  // URI = 'http://localhost:3000/MajorRestApi/maq';
  URI = 'http://165.227.194.14/MajorRestApi/maq';

  constructor(private http: HttpClient) { }

  createMaquina(nombre: string,
    modelo: string,
    descripcion: string,
    marca: string,
    tipo: string,
    potMax: string,
    potCont: string,
    combustible: string,
    partida: string,
    fases: string,
    maquina: File) {
    const fd = new FormData();
    fd.append('nombre', nombre);
    fd.append('modelo', modelo);
    fd.append('descripcion', descripcion);
    fd.append('marca', marca);
    fd.append('tipo', tipo);
    fd.append('potMax', potMax);
    fd.append('potCont', potCont);
    fd.append('combustible', combustible);
    fd.append('partida', partida);
    fd.append('fases', fases);
    fd.append('image', maquina);
    

    return this.http.post(this.URI, fd);

  }

  getPhotos() {
    return this.http.get<Maquina[]>(this.URI);
  }

  getPhoto(id: string){
    return this.http.get<Maquina>(`${this.URI}/${id}`);
  }
}

