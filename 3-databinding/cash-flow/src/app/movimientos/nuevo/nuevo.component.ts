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
  /**
   * Muestra u oculta el formulario
   */
  private formularioVisible = false;

  /** Propiedad con el array para montar la lista de tipos de movimientos posibles */
  private tiposMovimiento: any[] = [
    { id: 1, texto: 'Ingreso' },
    { id: 2, texto: 'Gasto' }];
  /**
   * Categorías, por tipo de movimiento
   */
  private categoriasTipoMovimiento: any[] = [
    { id: 1, texto: 'Nómina', tipo: 1 },
    { id: 2, texto: 'Ventas', tipo: 1 },
    { id: 3, texto: 'Intereses', tipo: 1 },
    { id: 4, texto: 'Hipoteca', tipo: 2 },
    { id: 5, texto: 'Compras', tipo: 2 },
    { id: 6, texto: 'Domiciliaciones', tipo: 2 },
    { id: 7, texto: 'Impuestos', tipo: 2 }];
  /**
   * Categorias filtradas para el tipo del movimiento actual
   */
  private categorias: any[] = [];

  /**
   * Movimiento en curso
   *  */
  movimiento: any = {};
  /**
   * Base de datos de movimientos
   */
  movimientos: any[] = [];

  constructor( ) { /** VACÍO */}
  /**
   * Evento que se lanaza al inicio del ciclo de vida del componente
   */
  ngOnInit() {
    this.movimiento = {
      importe: 0,
      tipo: this.tiposMovimiento[0].id
    };
    this.cambiarTipo();
  }

  private mostrarFormulario = () => {
    this.formularioVisible = true;
  }

  private ocultarFormulario = () => {
    this.formularioVisible = false;
  }

  /**
   * Recalcula las categorias válidas para el tipo del movimiento actual
   */
  cambiarTipo() {
    this.movimiento.tipo = +this.movimiento.tipo; // Cast manual a entero
    // recargar categorías cuando cambiamos de tipo de movimiento
    this.categorias = this.categoriasTipoMovimiento
      .filter(c => c.tipo === this.movimiento.tipo);
    // Asignación por defecto de la primera categoría
    this.movimiento.categoria = this.categorias[0].id;
  }
  /**
   * Clona y almacena el movimiento actual
   */
  guardarMovimiento() {
    const clone = Object.assign({}, this.movimiento);
    this.movimientos.push(clone);
  }


  // To do: https://juristr.com/blog/2016/11/ng2-binding-radiobutton-lists/ 
}
