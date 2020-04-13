import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHidra'
})
export class FilterPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto) return lista;
    return lista.filter(hidra => hidra.nombre.toLowerCase().includes(texto.toLowerCase()))
  }

  

}
