import { Component, OnInit } from '@angular/core';

import { Categoria } from './../modelos/categoria';
import { DatosService } from './../datos.service';
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

  /** Propiedad con el array para montar la lista de tipos de movimientos posibles */
  public tiposMovimiento: Tipo[] = [];
  /**
   * Categorias filtradas para el tipo del movimiento actual
   */
  private categorias: Categoria[] = [];
  /**
   * Movimiento en curso
   *  */
  movimiento: Movimiento;


  constructor(private datosService: DatosService ) { /** VACÍO */}
  /**
   * Evento que se lanaza al inicio del ciclo de vida del componente
   */
  ngOnInit() {
    this.tiposMovimiento = this.datosService.getTiposMovimiento();
    this.movimiento = this.datosService.getNuevoMovimiento();
    this.alCambiarTipo();
  }

  /**
   * Recalcula las categorias válidas para el tipo del movimiento actual
   */
  alCambiarTipo() {
    // recargar categorías cuando cambiamos de tipo de movimiento
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);;
    // Asignación por defecto de la primera categoría
    this.movimiento.categoria = this.categorias[0].id;
  }
  /**
   * Almacena el movimiento actual
   */
  alGuardarMovimiento() {
    console.log('al guardar' + JSON.stringify(this.movimiento));
    this.datosService.postMovimiento(this.movimiento);
  }
}
