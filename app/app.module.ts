// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Configs
import { APP_ROUTES } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { PaisesComponent } from './components/paises.component';
import { CiudadesComponent } from './components/ciudades.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES
  ],
  declarations: [
    AppComponent,
    PaisesComponent,
    CiudadesComponent
   ],
  bootstrap: [ AppComponent ]
})

export class AppModule{ }

//Aca los componentes estarán disponibles de manera global en la app
