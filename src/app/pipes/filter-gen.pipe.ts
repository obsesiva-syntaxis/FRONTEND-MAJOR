import { Pipe, PipeTransform } from '@angular/core';
import { generate } from 'rxjs';

@Pipe({
  name: 'filterGen'
})
export class FilterGenPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto) return lista;
    return lista.filter(gen => gen.nombre.toLowerCase().includes(texto.toLowerCase()));
  }

}
