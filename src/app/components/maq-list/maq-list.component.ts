import { Component, OnInit } from '@angular/core';
import {Maquina} from '../../interfaces/Maquina';
import {MaquinaService} from '../../services/maquina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maq-list',
  templateUrl: './maq-list.component.html',
  styleUrls: ['./maq-list.component.css']
})
export class MaqListComponent implements OnInit {

  maquinas: Maquina[] = [];
  p: number = 1;

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

}
