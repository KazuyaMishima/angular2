import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// definir las rutas
const routes: Routes = [
  { path: 'inicio', redirectTo: '' },
  { path: 'contacto', redirectTo: '' },
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