import { Component, Input, OnInit } from '@angular/core';

import { Movimiento } from './../modelos/movimiento';

@Component({
  selector: 'cf-lista',
  templateUrl: './lista.component.html',
  styles: [
    `.ingreso{
      color: darkgreen;
    }

    .gasto{
      color: darkred;
    }`]
})
export class ListaComponent implements OnInit {

  // Recibe los datos vía propiedad desde su contenedor
  /** Array de movimientos que debe pintar */
  @Input() movimientos: Movimiento[];

  // Sin dependencias
  constructor() { }

  ngOnInit() {

  }

}
