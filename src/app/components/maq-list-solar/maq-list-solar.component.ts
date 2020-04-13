import { Component, OnInit } from '@angular/core';
import { Solar } from '../../interfaces/Solar';
import { SolarService } from '../../services/solar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maq-list-solar',
  templateUrl: './maq-list-solar.component.html',
  styleUrls: ['./maq-list-solar.component.css']
})
export class MaqListSolarComponent implements OnInit {
  filterSolar= '';
  solares: Solar[] = [];
  p: number = 1;

  handleSearch(value) {
    this.filterSolar = value;
  }

  constructor(private solarService: SolarService, private router: Router) { }

  public ngOnInit() {
    this.solarService.getSolares().subscribe(
      res => {
        this.solares = res;
      },
      err => console.log(err));


  }


  onPageChange(page: number): void {
    setTimeout(() => {
      this.p = page;
    }, 3);
  }

  selectedCard(id: string) {
    this.router.navigate(['/solar', id]);
  }

  buscarHogar(){
    this.filterSolar = 'hogar';
  }

  buscarComercial(){
    this.filterSolar = 'comercial';
  }
  
  buscarBombaSolar(){
    this.filterSolar = 'bomba solar';
  }

}
