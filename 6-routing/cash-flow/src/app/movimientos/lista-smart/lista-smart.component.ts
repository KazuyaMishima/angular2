import { Movimiento } from './../modelos/movimiento';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DatosService } from "../datos.service";
@Component({
  selector: 'cf-lista-smart',
  templateUrl: './lista-smart.component.html',
  styleUrls: ['./lista-smart.component.css']
})
export class ListaSmartComponent implements OnInit {

  // los observables se sufijan con $ 
  /** Observable del almacén de movimientos */
  movimientos$: Observable<Movimiento[]>;
  movimientos: Movimiento[];

  /** Este componente depende del objeto DatosService */
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    // No se necesita suscripción cuando se usa el pipe async
    this.movimientos$ = this.datosService.getMovimientos$();
    // Pero si se requiere, entoces se debe suscribir al observable
    this.movimientos$.subscribe(datos => this.movimientos = datos);

    this.movimientos = this.datosService.movimientos;
  }

}
