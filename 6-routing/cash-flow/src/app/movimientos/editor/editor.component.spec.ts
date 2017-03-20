import * as movimientosIndex from './../index';

/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DatosService } from './../datos.service';
import { DebugElement } from '@angular/core';

describe('EditorComponent', () => {
  let component: movimientosIndex.EditorComponent;
  let fixture: ComponentFixture<movimientosIndex.EditorComponent>;
  let datosService: DatosService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(movimientosIndex.movimientosTestActivatedRouteConfig)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movimientosIndex.EditorComponent);
    component = fixture.componentInstance;
    datosService = fixture.debugElement.injector.get(DatosService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovimientoBy_Id', () => {
    spyOn(datosService, 'getMovimientoBy_Id').and.callThrough();
    component.ngOnInit();
    expect(datosService.getMovimientoBy_Id).toHaveBeenCalledWith(1);
  });
});
