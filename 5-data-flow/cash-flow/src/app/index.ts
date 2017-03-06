import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MovimientosModule } from './movimientos/movimientos.module'; // Módulo funcional propio
import { SharedModule } from './shared/shared.module'; // Módulo propio compartido

export { AppComponent } from './app.component';
export { BrowserModule } from '@angular/platform-browser';
export { MovimientosModule } from './movimientos/movimientos.module'; // Módulo funcional propio
export { SharedModule } from './shared/shared.module'; // Módulo propio compartido

export const appConfig = {
  declarations: [ // cosas declaradas en este módulo
    AppComponent
  ],
  imports: [ // otros módulos que necesitamos para que este funcione
    BrowserModule,
    MovimientosModule,
    SharedModule
  ],
  bootstrap: [ // componente raíz para el arranque
    AppComponent
  ]
}
