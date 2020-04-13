import { Injectable } from '@angular/core';
import { Hidraulica } from '../interfaces/Hidraulica';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HidraService {

  //URI = 'http://localhost:3000/MajorRestApi/hidra';
  URI = 'http://165.227.194.14/MajorRestApi/hidra';

  constructor(private http:HttpClient) { }

  getHidras() {
    return this.http.get<Hidraulica[]>(this.URI);
  }

  getHidra(id: string){
    return this.http.get<Hidraulica>(`${this.URI}/${id}`);
  }

}
