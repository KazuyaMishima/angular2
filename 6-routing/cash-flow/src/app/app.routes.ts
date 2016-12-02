import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

// definir las rutas
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', redirectTo: '' },
  { path: 'contacto', redirectTo: '' },
  { path: 'movimientos', component: MovimientosComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];