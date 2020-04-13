import { Component, OnInit } from '@angular/core';
import {Maquina} from '../../interfaces/Maquina';
import {MaquinaService} from '../../services/maquina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maq-list-gen',
  templateUrl: './maq-list-gen.component.html',
  styleUrls: ['./maq-list-gen.component.css']
})
export class MaqListGenComponent implements OnInit {
  filterGen = '';
  maquinas: Maquina[] = [];
  p: number = 1;

  handleSearch(value){
    this.filterGen = value;
  }
  constructor(private maquinaService: MaquinaService, private router: Router) { }

  public ngOnInit() {
    this.maquinaService.getPhotos().subscribe(
      res => {
        this.maquinas = res;
      },
      err => console.log(err));
    
    
  }

  selectedCard(id: string){
    this.router.navigate(['/maquina', id]);
  }

  busquedaDiesel(){
    this.filterGen = "diesel";
  }

  busquedaGasolina(){
    this.filterGen = "gasolina";
  }

  busquedaGas(){
    this.filterGen = "lpg";
  }
}
