import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
/**
 * Clase del componente nuevo movimiento
 * */
export class NuevoComponent implements OnInit {
  
  /**
   * Muestra u oculta el formulario
   */
  public formularioVisible: boolean = false;

  public mostrarFormulario = () => {
    this.formularioVisible = true;
  }
  
  public ocultarFormulario = () => {
    this.formularioVisible = false;
  }

  /**
   * Tipos de movimientos
   */
  public tipos: any[] = [
    { id: 1, text: "Ingreso" },
    { id: 2, text: "Gasto" }
  ];
  /**
   * Categorías, por tipo de movimiento
   */
  categoriasTipos: any[] = [
    { id: 1, text: "Nómina", type: 1 },
    { id: 2, text: "Ventas", type: 1 },
    { id: 3, text: "Intereses", type: 1 },
    { id: 4, text: "Hipoteca", type: 2 },
    { id: 5, text: "Compras", type: 2 },
    { id: 6, text: "Domiciliaciones", type: 2 },
    { id: 7, text: "Impuestos", type: 2 }];
  
  categorias: any[] = [];

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
  * arranque del componente 
  **/
  ngOnInit() {
    this.movimiento = {
      fecha: new Date(Date.now()),
      importe: 0,
      tipo: this.tipos[0].id
    }
    this.cambioTipo();
  }

  /**
   *
   */
  cambioTipo() {
    // recargar categorías cuando cambiamos de tipo de movimiento
    this.categorias = this.categoriasTipos
      .filter(c => c.type === this.movimiento.tipo);
  }

  guardarMovimiento() {
    let clone = Object.assign({}, this.movimiento);
    this.movimientos.push(clone);
  }
}
