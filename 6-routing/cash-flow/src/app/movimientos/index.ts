import { DatosService } from './datos.service';
import { EditorComponent } from './editor/editor.component';
import { ListaComponent } from './lista/lista.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { MovimientosRoutingModule } from './movimientos-routing.module';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './../shared/shared.module';

export { DatosService } from './datos.service';
export { EditorComponent } from './editor/editor.component';
export { ListaComponent } from './lista/lista.component';
export { MovimientosComponent } from './movimientos/movimientos.component';
export { MovimientosRoutingModule } from './movimientos-routing.module';
export { NuevoComponent } from './nuevo/nuevo.component';
export { RouterTestingModule } from '@angular/router/testing';
export { SharedModule } from './../shared/shared.module';

export const movimientosConfig = {
  imports: [ // dependencias de otros módulos
    SharedModule,
    MovimientosRoutingModule // el módulo de enrutado
  ],
  declarations: [ // componentes que se declaran en este módulo de movimientos
    EditorComponent,
    MovimientosComponent,
    NuevoComponent,
    ListaComponent // este componente no se exporta
  ],
  exports: [ // Ya no exporta ningún componente

  ],
  providers: [ // registro del servicio de datos como un proveedor inyectable
    DatosService
  ]
}

export const movimientosTestConfig = {
  imports: [ // dependencias de otros módulos
    SharedModule,
    RouterTestingModule // el módulo de enrutado
  ],
  declarations: [ // componentes que se declaran en este módulo de movimientos
    EditorComponent,
    MovimientosComponent,
    NuevoComponent,
    ListaComponent // este componente no se exporta
  ],
  exports: [ // Ya no exporta ningún componente

  ],
  providers: [ // registro del servicio de datos como un proveedor inyectable
    DatosService
  ]
}