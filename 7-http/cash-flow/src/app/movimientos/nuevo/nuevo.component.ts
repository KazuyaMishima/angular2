import { Component, OnInit } from '@angular/core';
import { MaestroModel, MaestroTipoModel, MovimientoModel } from './../datos.model';

import { DatosService } from './../datos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  tipos: MaestroModel[] = [];
  categorias: MaestroTipoModel[] = [];
  movimiento: MovimientoModel;

  
  // las dependencias se declaran como parámetros del constructor  
  /** Este componente depende del objeto DatosService */
  constructor(private datosService: DatosService) {
    // No se escribe nada en el constructor ni en la clase
    // Los argumentos los convierte TypeScript en propiedades
   }

  /** Al iniciarse el componente se cargan los datos*/
  ngOnInit() {
    this.datosService.getTipos().subscribe(t=>this.tipos=t);
    this.movimiento = this.datosService.getNuevoMovimiento();
    this.cambiarTipo();
  }
  /** Al cambiar el tipo de un movimiento se recargan las categorías */
  cambiarTipo() {
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    // Cambios en el tipo, crean cambios en la categoría
    this.movimiento.categoria = this.datosService.getCategoriasPorTipo(this.movimiento.tipo)[0].id;
  }
  /** Guarda un movimiento en el almacén */
  guardarMovimiento() {
    this.datosService.postMovimiento(this.movimiento);
  }
}
