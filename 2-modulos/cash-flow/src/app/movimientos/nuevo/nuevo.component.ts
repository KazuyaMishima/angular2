import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'] // ruta para hojas de estilo propias
})
/**
 *  Componente para crear movimientos
 **/
export class NuevoComponent implements OnInit {
  public mostrarFormulario = false;
  constructor() { }
  ngOnInit() {

  }

  onClickOcultar() {
    this.mostrarFormulario = false;
  }

}
