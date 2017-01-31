import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'] // ruta para hpjas de estilo propias
})
/**
 *  Componente para crear movimientos
 **/
export class NuevoComponent implements OnInit {
  /** Propiedad con el array para montar la lista de tipos de movimientos posibles */
  private tiposMovimiento: any[] = [
    { id: 1, texto: 'Ingreso' },
    { id: 2, texto: 'Gasto' }];
  /** Propiedad en la que almacenar la información de un movimiento */
  private movimiento: any = {};

  constructor() { }
  /**
   * Evento que se lanaza al incio del ciclo de vida del componente
   */
  ngOnInit() {
    this.movimiento = {
      importe: 0,
      tipo: this.tiposMovimiento[0].id
    };
  }

}
