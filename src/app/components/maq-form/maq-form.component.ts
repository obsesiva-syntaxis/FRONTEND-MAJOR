import { Component, OnInit } from '@angular/core';
import {MaquinaService} from '../../services/maquina.service';
import {Maquina} from '../../interfaces/Maquina';
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-maq-form',
  templateUrl: './maq-form.component.html',
  styleUrls: ['./maq-form.component.css']
})
export class MaqFormComponent implements OnInit {

  file: File;
  maquinaSelected: string | ArrayBuffer;
  maquinas: Maquina[] = [];

  constructor(private maquinaService: MaquinaService, private router: Router) { }

  ngOnInit() {
    this.maquinaService.getPhotos().subscribe(
      res => {
        this.maquinas = res;
      },
      err => console.log(err));
  }

  onMaquinaSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File> event.target.files[0];
      //image preview
      const reader = new FileReader();
      reader.onload = e => this.maquinaSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
  uploadMaquina(nombre: HTMLInputElement, 
                modelo: HTMLInputElement,
                descripcion: HTMLTextAreaElement,
                marca: HTMLInputElement,
                tipo: HTMLInputElement,
                potMax: HTMLInputElement,
                potCont: HTMLInputElement,
                combustible: HTMLInputElement,
                partida: HTMLInputElement,
                fases: HTMLInputElement ){

    this.maquinaService.createMaquina(nombre.value, modelo.value, 
        descripcion.value, marca.value, tipo.value, potMax.value, potCont.value,
        combustible.value, partida.value, fases.value, this.file)
      .subscribe(res => console.log(res), err => console.log(err));
  }

  selectedCard(id: string){
    this.router.navigate(['/maquina', id]);
  }
}
