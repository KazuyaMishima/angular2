import { Component, OnInit } from '@angular/core';

import { DatosService } from './../datos.service';
import { Movimiento } from './../modelos/movimiento';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cf-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

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
    this.movimientos$.subscribe(datos => this.movimientos = datos );
  }

}
