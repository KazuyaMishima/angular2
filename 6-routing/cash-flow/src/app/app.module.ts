// objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';
// importación de módulo de enrtutado
import { AppRoutingModule } from './app-routing.module';
// importación de módulos de funcionalidad
import { MovimientosModule } from './movimientos/movimientos.module';
import { HomeModule } from './home/home.module';
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
    AppRoutingModule // el módulo de rutas ya configurado
  ], // otros módulos que necesitamos para que este funcione
  providers: [] , // inyección de servicios comunes para la aplicación
  bootstrap: [AppComponent] // componente raíz para el arranque
})
// los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
