import * as movimientosIndex from './../index';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Movimiento } from './../modelos/movimiento';
import { Testing } from './../../shared/testing/testing';

/* tslint:disable:no-unused-variable */









describe('MovimientosComponent', () => {
  let component: movimientosIndex.MovimientosComponent;
  let fixture: ComponentFixture<movimientosIndex.MovimientosComponent>;
  let testing: Testing;

  beforeEach(async(() => {
    TestBed.configureTestingModule(movimientosIndex.movimientosConfig)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movimientosIndex.MovimientosComponent);
    component = fixture.componentInstance;
    testing = new Testing(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table list', () => {
    component.movimientos = [];
    component.movimientos.push(new Movimiento(new Date(), 1, 0, 0 ));
    fixture.detectChanges();
    const filas = testing.queryAllByCss('tr[name="filaMovimiento"]');
    expect(filas.length).toBe(1);
  });

  it('should call guardarMovimiento on nuevo.guardarMovimiento click', () => {
    spyOn(component, 'guardarMovimiento').and.callThrough();
    testing.queryElementByCss('button[name="guardarMovimiento"]').click();
    expect(component.guardarMovimiento).toHaveBeenCalled();
  });
});
