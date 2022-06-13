import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };
  livros: string[] = ['Java', 'Angular 12'];

  //suporte pro filtro que esta no input
  filtro: string = '';

  addCurso(valor: string) {
    //adiciona o novo valor no array
    this.livros.push(valor);

    console.log(this.livros);
  }

  obterCursos(){
    if( this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === ''){
      return this.livros;
    }
    return this.livros.filter((v) =>{
     if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0){
      return true
     }
     return false;

    });
  }
 valorAsync = new Promise ((resolve, reject) => {
   setTimeout(() => resolve('Valor assincrono') ,2000)

   });
//Observable permite vc fazer programação reativa
//da pra fazer tudo em programação reativa
valorAsync2 = new Observable<string>(observable => {
  setTimeout(() => {
    observable.next('Valor assíncrono 2');
  }, 2000);
});



  constructor() {}

  ngOnInit(): void {}
}
