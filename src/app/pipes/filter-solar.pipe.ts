import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSolar'
})
export class FilterSolarPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto) return lista;
    return lista.filter(solar => solar.nombre.toLowerCase().includes(texto.toLowerCase()));
  }

}
