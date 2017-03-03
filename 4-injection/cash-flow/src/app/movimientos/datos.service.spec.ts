import { TestBed, async, inject } from '@angular/core/testing';

import { DatosService } from './datos.service';
import {Movimiento} from './modelos/movimiento';
import { Observable } from 'rxjs/Observable';

/* tslint:disable:no-unused-variable */





describe('DatosService', () => {
  let datosService: DatosService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosService]
    });
    datosService = TestBed.get(DatosService);
  });

  it('should ...', inject([DatosService], (service: DatosService) => {
    expect(service).toBeTruthy();
  }));

  it('should getNuevoMovimiento', () => {
    const nuevoMovimiento = <Movimiento>datosService.getNuevoMovimiento();
    expect(nuevoMovimiento).toBeTruthy();
  });

  it('should postMovimiento and Emit', () => {
    datosService.getMovimientos$().subscribe((movimientos) => {
      expect(movimientos.length > 0 ).toBeTruthy();
    });
    datosService.postMovimiento(datosService.getNuevoMovimiento());
  });
});
