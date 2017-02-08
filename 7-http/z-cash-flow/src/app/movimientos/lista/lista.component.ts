import { Component, OnInit } from '@angular/core';

import { DatosService } from './../datos.service';
// Las clases e interfaces de tipos no se inyectan
import { MovimientoModel } from './../datos.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  movimientos: MovimientoModel[];
  /** Este componente depende del objeto DatosService */
  constructor(private datosService: DatosService) { }

  /** Al iniciar el componente se enlaza con el almacén de movimientos */
  ngOnInit() {
    this.datosService.getMovimientos$().subscribe(m=>this.movimientos=m);
  }

}
