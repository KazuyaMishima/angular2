import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes necesarios
import { HomeComponent } from './home/home.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

// definir las rutas
const routes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }