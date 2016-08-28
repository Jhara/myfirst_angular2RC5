import { Component } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'paises',
  template: `
  <h2>Paises</h2>
  <ul>
    <li>Colombia</li>
    <li>Mexico</li>
  </ul>
  `,
  providers: [PaisesService]

})

export class PaisesComponent{
  public posts;

  constructor(private _paisesService: PaisesService){
    this._paisesService.getPosts().subscribe(result => {
      this.posts = result;
      console.log(this.posts);

    },
    error => {
      console.error(<any>error);
    }
  );
  }

}

/*
Para usar componentes dentro de otro componente, lo podemos usar de la
manera clasica y usar directives
*/
