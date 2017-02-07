/** Importación de las rutas y sus componentes */
import { HomeRoutingModule, routableComponents } from './home-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule // el módulo que sabe enrutar
  ],
  declarations: [
    routableComponents // los componentes de enrutado
  ]
})
export class HomeModule { }
