/** Módulos de enrutado de Angular2 */
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

// Array con las rutas de este módulo
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
    RouterModule.forRoot(routes) // configuración raiz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre
  ]
})
export class AppRoutingModule { }