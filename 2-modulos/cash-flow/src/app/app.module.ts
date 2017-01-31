// importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';
// importación de módulos con objetos y utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// decorador que define un módulo
@NgModule({
  declarations: [
    AppComponent
  ], // cosas declaradas en este módulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ], // otros módulos que necesitamos para que este funcione
  providers: [], // servicios inyectables en los componentes
  bootstrap: [AppComponent] // componente raíz para el arranque
})
// los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
