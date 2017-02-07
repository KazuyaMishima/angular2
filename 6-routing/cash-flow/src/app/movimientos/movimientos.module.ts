import { DatosService } from './datos.service';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { NgModule } from '@angular/core';
import { NuevoComponent } from './nuevo/nuevo.component';
import { SharedModule } from './../shared/shared.module';
import { ListaComponent } from './lista/lista.component';
/**
 * Una aplicación se compoen de unos o más módulos funcionales
 */
@NgModule({
  imports: [ // dependencias de otros módulos
    SharedModule
  ],
  declarations: [ // componentes que se declaran en este módulo de movimientos
    MovimientosComponent,
    NuevoComponent,
    ListaComponent // este componente no se exporta
  ],
  exports: [ // componentes que exporta para ser usados en otros módulos
    MovimientosComponent
  ],
  providers: [ // registro del servicio de datos como un proveedor inyectable
    DatosService
  ]
})
export class MovimientosModule { }
