import { RouterModule, Routes } from '@angular/router';

/** Componente enrutable */
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
/** Rutas asociadas a componentes */
const routes: Routes = [
  { path: '', component: HomeComponent },
];
/** array de componentes enrutables */
export const routableComponents = [
  HomeComponent
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) // Para módulo funcional
  ],
  exports: [
    RouterModule // listo para importarlo en HomeModule
  ]
})
export class HomeRoutingModule { }
