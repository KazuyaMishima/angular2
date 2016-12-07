// Importar el servicio DatosService desde el fichero
import { DatosService } from './datos.service';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule, routableComponents } from './movimientos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MovimientosRoutingModule
  ], // dependencias de otros módulos
  declarations: [
    routableComponents
  ], // Componente que el mismo declara
  exports: [

  ], // no necesita exportar nada
  providers: [
    DatosService
  ] // registro del servicio como un provvedor del módulo
})
export class MovimientosModule { }
