import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import {ListaComponent, ListaComponent} from './lista.component';

import { By } from '@angular/platform-browser';
import {DatosService} from '../datos.service';
import { DebugElement } from '@angular/core';
import { MovimientosComponent } from './../movimientos/movimientos.component';
import { NuevoComponent } from './../nuevo/nuevo.component';
import { SharedModule } from './../../shared/shared.module';

/* tslint:disable:no-unused-variable */










describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        MovimientosComponent,
        NuevoComponent,
        ListaComponent
      ],
      providers: [DatosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
