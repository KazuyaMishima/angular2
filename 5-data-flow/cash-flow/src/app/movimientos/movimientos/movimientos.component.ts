import { Component, OnInit } from '@angular/core';

import { Categoria } from './../modelos/categoria';
import { DatosService } from './../datos.service';
import { Movimiento } from './../modelos/movimiento';
import { Observable } from 'rxjs/Observable';
import { Tipo } from './../modelos/tipo';

@Component({
  selector: 'cf-movimientos',
  templateUrl: './movimientos.component.html',
  styles: []
})
/**
 * Componente para trabajar con movimientos de caja
 * */
export class MovimientosComponent implements OnInit {
  // Todos los datos necesarios se gestionana en el componente
  tipos: Tipo[] = [];
  categorias: Categoria[] = [];
  movimiento: Movimiento;
  movimientos: Movimiento[];
  movimientos$: Observable<Movimiento[]>;

  // las dependencias se declaran como parámetros del constructor
  /** Depende del servicio de datos */
  constructor(private datosService: DatosService) { }

  /** Al arrancar, obtiene datos estáticos y suscripciones a otros vivos */  
  ngOnInit() {
    this.tipos = this.datosService.getTiposMovimiento();
    this.movimiento = this.datosService.getNuevoMovimiento();
    this.cambiarTipo();
    this.movimientos$ = this.datosService.getMovimientos$();
    this.movimientos$.subscribe(d => this.movimientos = d);
    this.movimientos$.subscribe(function (valorConcretoDelArrayDeMovimientos) {
      this.movimientos = valorConcretoDelArrayDeMovimientos;
    });
  }

  /** Cuando ocurre un cambio en el tipo de movimiento */  
  cambiarTipo() {
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    // Cambios en el tipo, crean cambios en la categoría
    this.movimiento.categoria = this.datosService.getCategoriasPorTipo(this.movimiento.tipo)[0].id;
  }
  /** Cuando se quiere guardar un movimiento */
  guardarMovimiento() {
    console.log(`Guardando ${JSON.stringify(this.movimiento)}`);
    this.datosService.postMovimiento(this.movimiento);
  }
}
