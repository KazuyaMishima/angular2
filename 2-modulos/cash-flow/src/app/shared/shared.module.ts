import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
/**
 * El módulo compartido se importa en todos los demás módulos
 * Con dos propósitos:
 *  - unificar las dependencias externas comunes
 *  - definir componentes y servicios reutilizables por la aplicación
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule
  ] // Lo que aquí se exporte se importará en los módulos funcionales
})
export class SharedModule { }
