import * as movimientosIndex from './../index';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Movimiento } from './../modelos/movimiento';
import { Testing } from './../../shared/testing/testing';

/* tslint:disable:no-unused-variable */
describe('NuevoComponent', () => {
  let component: movimientosIndex.NuevoComponent;
  let fixture: ComponentFixture<movimientosIndex.NuevoComponent>;
  let testing: Testing;

  beforeEach(async(() => {
    TestBed.configureTestingModule(movimientosIndex.movimientosConfig)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movimientosIndex.NuevoComponent);
    component = fixture.componentInstance;
    component.movimiento = new Movimiento(new Date(), 1, 0, 0);
    testing = new Testing(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a new movimiento', () => {
    const importe: HTMLElement = testing.queryElementByCss('input[name="importe"]');
    expect(component.movimiento.importe).toBe(1);
    expect(testing.getModelValue(importe)).toContain('1');
  });

  it('should emit guardar event', () => {
    expect(component).toBeTruthy();
  });
});
