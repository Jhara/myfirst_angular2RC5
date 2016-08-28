import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ciudades',
  template: `
  <h2>Ciudades</h2>
  <ul>
    <li>Bogota</li>
    <li>Medellin</li>
  </ul>
  <p>Codigo postal: {{codigoPostal}}</p>
  `
})

export class CiudadesComponent implements OnInit{
  public codigoPostal:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(){
    // Recogemos params de la url
    this.route.params.subscribe( params => {
      this.codigoPostal = params.id;
    }

    ;

  }



}
