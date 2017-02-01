import { MovimientosComponent } from './movimientos/movimientos.component';
import { NgModule } from '@angular/core';
import { NuevoComponent } from './nuevo/nuevo.component';
import { SharedModule } from './../shared/shared.module';
/**
 * Una aplicación se compoen de unos o más módulos funcionales
 */
@NgModule({
  imports: [
    SharedModule
  ], // dependencias de otros módulos
  declarations: [
    MovimientosComponent,
    NuevoComponent // este componente no se exporta
  ], // componentes que se declaran en este módulo de movimientos
  exports: [
    MovimientosComponent
  ] // componentes que exporta para ser usados en otros módulos
})
export class MovimientosModule { }
