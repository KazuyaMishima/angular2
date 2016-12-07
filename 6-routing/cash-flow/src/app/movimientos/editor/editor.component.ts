import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  movimiento;
  constructor(private route: ActivatedRoute, private datosService: DatosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const _id = params['id'].toString();
        this.movimiento = this.datosService.getMovimientoBy_Id(_id);
      });
  }

}
