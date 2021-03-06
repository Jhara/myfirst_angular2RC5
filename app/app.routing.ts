import { Routes, RouterModule } from '@angular/router';

//Componentes
import { PaisesComponent } from './components/paises.component';
import { CiudadesComponent } from './components/ciudades.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/paises',
    terminal: true
  },
  { path:'paises', component: PaisesComponent },
  { path:'ciudades', component: CiudadesComponent },
  { path:'la-ciudad/:id', component: CiudadesComponent }

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
