import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DatosService } from '../datos.service';
import { DebugElement } from '@angular/core';
import { ListaComponent } from './../lista/lista.component';
import { MovimientosComponent } from './movimientos.component';
import { NuevoComponent } from './../nuevo/nuevo.component';
import { SharedModule } from './../../shared/shared.module';

/* tslint:disable:no-unused-variable */
describe('MovimientosComponent', () => {
  let component: MovimientosComponent;
  let fixture: ComponentFixture<MovimientosComponent>;

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
    fixture = TestBed.createComponent(MovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
