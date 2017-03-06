import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DatosService } from './../datos.service';
import { Movimiento } from './../modelos/movimiento';

/** Servicio para acceder a la ruta activa */




@Component({
  selector: 'cf-editor',
  templateUrl: './editor.component.html',
  styles: []
})
export class EditorComponent implements OnInit {
  movimiento: Movimiento = new Movimiento(new Date, 0, 0, 0);

  constructor(private route: ActivatedRoute, private datosService: DatosService) { }

  ngOnInit() {
    // subscripción al observable params
    this.route.params
      .subscribe(params => {
        const _id = <string>params['id']; // recepción del parámetro
        if (_id) {
          this.movimiento = this.datosService.getMovimientoBy_Id(_id); // consulta al servicio
        }
      });
  }

}
