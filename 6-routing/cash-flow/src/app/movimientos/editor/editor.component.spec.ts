import * as movimientosIndex from './../index';

/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('EditorComponent', () => {
  let component: movimientosIndex.EditorComponent;
  let fixture: ComponentFixture<movimientosIndex.EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(movimientosIndex.movimientosTestConfig)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movimientosIndex.EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
