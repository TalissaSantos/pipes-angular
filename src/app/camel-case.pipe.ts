import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

// vc pode passa qualquer argumento que quiser e ele pode retornar qualquer coisa
  transform(value: any, args?: any): any {
    //está pegando o valor e separando as palavras da frase com o split
    let values = value.split(' ');
    // ela sera retornada
    let result = '';
//values é a palavra que vai interar
    for(let v of values){
      //vai transforma a primeira letra em letra maiuscula
      result += this.capitalize(v) + ' ';
    }

    return result;
  }
//vai transforma a primeira letra em maiuscula
  capitalize(value: string){
    //substring (o 0 é a posição e o 1 é a primeira letra q esta pegando)e tranforma em letra maiuscula )
    return value.substring(0,1).toUpperCase()+
    //esta pulando a primeira letra e colocando a proxima em minuscula
    value.substring(1).toLocaleLowerCase();
  }

}
