import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {

  private tiposMovimiento: any[] = [
    { id: 1, texto: 'Ingreso' },
    { id: 2, texto: 'Gasto' }];

  private movimiento: any = {};

  constructor() { }

  ngOnInit() {
    this.movimiento = {
      importe: 0,
      tipo: this.tiposMovimiento[0].id
    };
  }

}
