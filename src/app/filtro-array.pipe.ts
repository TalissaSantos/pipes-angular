import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args: any): any {

    if( value.length === 0 || args === undefined){
      return value;
    }
    // faz a filtragem com a dependendo da letra
    let filter= args.toLocaleLowerCase();
    return value.filter (
     (v:any) => v.toLocaleLowerCase().indexOf(filter) != -1
    );

}

}
