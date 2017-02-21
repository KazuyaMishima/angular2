import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-movimientos',
  templateUrl: './movimientos.component.html',
  styles: []
})
/**
 * Componente para trabajar con movimientos de caja
 * */
export class MovimientosComponent implements OnInit {
  /**
   * Propiedades visibles desde la plantilla
   */
  private title = 'Alta y visualización de tus ingresos y gastos';

  constructor() { }

  ngOnInit() {
  }

}
