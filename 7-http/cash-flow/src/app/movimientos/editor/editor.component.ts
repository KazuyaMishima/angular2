import { Component, OnInit } from '@angular/core';

/** Servicio para acceder a la ruta activa */
import { ActivatedRoute } from '@angular/router';
import { DatosService } from './../datos.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  movimiento;
  /**
   * ActivatedRoute da acceso a la ruta activa
   */
  constructor(private route: ActivatedRoute, private datosService: DatosService) { }

  ngOnInit() {
    // subscripción al observable params
    this.route.params
      .subscribe(params => {
        const _id = params['id'].toString(); // recpeción del parámetro
        this.datosService
          .getMovimientoPor_Id$(_id)
          .subscribe(r=>this.movimiento=r); // consulta al servicio
      });
  }
 
}
