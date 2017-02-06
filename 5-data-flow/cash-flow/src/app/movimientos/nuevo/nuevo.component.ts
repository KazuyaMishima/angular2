import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Categoria } from './../modelos/categoria';
import { Movimiento } from './../modelos/movimiento';
import { Tipo } from './../modelos/tipo';

@Component({
  selector: 'cf-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'] // ruta para hojas de estilo propias
})
/**
 *  Componente para crear movimientos
 **/
export class NuevoComponent implements OnInit {
  // recibe datos vía propiedades
  /** propiedad para entrada de tipos de movimiento */
  @Input() tipos: Tipo[] = [];
  /** propiedad para entrada de categorias de movimiento */
  @Input() categorias: Categoria[] = [];
  /** propiedad para entrada de un movimiento */
  @Input() movimiento: Movimiento;


  // emite eventos de intención de cambio y de guardado
  /** propiedad para emitir el evento de guardado del movimiento actual */
  @Output() guardarMovimiento = new EventEmitter<Movimiento>();
  /** propiedad para emitir el evento de cambio de tipo del movimiento actual */
  @Output() cambiarTipo = new EventEmitter<number>();

  // ya no se usa datos service
  // es un componente tonto ()
  constructor() { /** VACÍO */}

  ngOnInit() {   }
  /**
   * Recalcula las categorias válidas para el tipo del movimiento actual
   */
  alCambiarTipo(): void {
    this.cambiarTipo.emit(this.movimiento.tipo);
  }
  /**
   * Almacena el movimiento actual
   */
  alGuardarMovimiento(): void {
    this.guardarMovimiento.emit(this.movimiento);
  }
}
