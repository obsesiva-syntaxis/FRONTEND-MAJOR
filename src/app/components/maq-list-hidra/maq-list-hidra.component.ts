import { Component, OnInit } from '@angular/core';
import { Hidraulica } from '../../interfaces/Hidraulica';
import { HidraService } from '../../services/hidra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maq-list-hidra',
  templateUrl: './maq-list-hidra.component.html',
  styleUrls: ['./maq-list-hidra.component.css']
})
export class MaqListHidraComponent implements OnInit {
  filterHidra= '';
  hidras: Hidraulica[] = [];
  p: number = 1;

  handleSearch(value){
    this.filterHidra = value;
  }
  
  constructor(private hidraService: HidraService, private router: Router) { }

  public ngOnInit() {
    this.hidraService.getHidras().subscribe(
      res => {
        this.hidras = res;
      },
      err => console.log(err));
    
    
  }

  onPageChange(page: number): void {
    setTimeout(() => {
        this.p = page;
    }, 3);
} 

  selectedCard(id: string){
    this.router.navigate(['/hidra', id]);
  }

  buscarPerifericos(){
    this.filterHidra = 'periférica';
  }

  buscarCentrifuga(){
    this.filterHidra = 'centrifuga';
  }

}
