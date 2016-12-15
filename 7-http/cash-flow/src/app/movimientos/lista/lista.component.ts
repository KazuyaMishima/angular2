// Las clases e interfaces de tipos no se inyectan
import { MovimientoModel } from './../datos.model';
import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';

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
    this.movimientos = this.datosService.getMovimientos();
  }

}
