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
  movimiento: any = {};

  
  // las dependencias se declaran como parámetros del constructor  
  /** Este componente depende del objeto DatosService */
  constructor(private datosService: DatosService) {
    // No se escribe nada en el constructor ni en la clase
    // Los argumentos los convierte TypeScript en propiedades
   }

  /** Al iniciarse el componente se cargan los datos*/
  ngOnInit() {
    this.datosService.getTipos().subscribe(tipos => {
      this.tipos = tipos;
      this.datosService.getCategorias().subscribe(categorias => {
        this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
      });
    });
  }
  /** Al cambiar el tipo de un movimiento se recargan las categorías */
  cambiarTipo() {
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    // Cambios en el tipo, crean cambios en la categoría
    let categoriasPorTipo = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    if (categoriasPorTipo && categoriasPorTipo.length > 0) {
      this.movimiento.categoria = this.datosService.getCategoriasPorTipo(this.movimiento.tipo)[0].id;
    }  
  }
  /** Guarda un movimiento en el almacén */
  guardarMovimiento() {
    console.log('guardarMovimiento');
    this.datosService
      .postMovimiento(this.movimiento)
      .subscribe(r => console.log('ok'));
  }
}
