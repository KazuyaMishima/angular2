// importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';
// importación de módulo de enrutado asociado
import { AppRoutingModule } from './app-routing.module';
// objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { ContactoModule } from './contacto/contacto.module';
import { FormsModule } from '@angular/forms';
// importación de módulos de funcionalidad
import { HomeModule } from './home/home.module';
import { HttpModule } from '@angular/http';
import { MovimientosModule } from './movimientos/movimientos.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
// decorador que define un módulo
@NgModule({
  declarations: [
    AppComponent
  ], // cosas declaradas en este módulo
  imports: [
    BrowserModule,
    ContactoModule,
    FormsModule,
    HttpModule,
    HomeModule, // el módulo de bienvenida
    MovimientosModule, // el módulo de movimientos
    AppRoutingModule, // el módulo de rutas ya configurado
    SharedModule // módulo con utilidades comunes
  ], // otros módulos que necesitamos para que este funcione
  bootstrap: [AppComponent] // componente raíz para el arranque
})
// los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
