import { Component } from "@angular/core";

@Component({
  selector: "mi-app",
  template: `
  <h1>{{titulo}}</h1>
  <nav>
  <a routerLink='/paises'>Paises</a>
  <a routerLink='/ciudades'>Ciudades</a>
  <a routerLink='/la-ciudad/12'>La Ciudad</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  public titulo:string = "Rutas con Angular 2 RC5";
}
