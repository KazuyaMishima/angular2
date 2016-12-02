// objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
// importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';
// importación de un módulo de funcionalidad
import { MovimientosModule } from './movimientos/movimientos.module';
import { HomeModule } from './home/home.module';
// fichero con las rutas para el módulo raiz
import { routes } from './app.routes';
// decorador que define un módulo
@NgModule({
  declarations: [
    AppComponent
  ], // cosas declaradas en este módulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule, // el módulo de movimientos
    HomeModule, // el módulo de bienvenida
    RouterModule.forRoot(routes) // el módulo de rutas configurado
  ], // otros módulos que necesitamos para que este funcione
  providers: [] , // inyección de servicios comunes para la aplicación
  bootstrap: [AppComponent] // componente raíz para el arranque
})
// los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
