import { Injectable } from '@angular/core';
import { Solar } from '../interfaces/Solar';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SolarService {

  // URI = 'http://localhost:3000/MajorRestApi/solar';
  URI = 'http://165.227.194.14/MajorRestApi/solar';

  constructor(private http:HttpClient) { }

  getSolares() {
    return this.http.get<Solar[]>(this.URI);
  }

  getSolar(id: string){
    return this.http.get<Solar>(`${this.URI}/${id}`);
  }
}
