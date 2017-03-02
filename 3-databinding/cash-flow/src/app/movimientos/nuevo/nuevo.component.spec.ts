import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MovimientosComponent } from './../movimientos/movimientos.component';
import { NuevoComponent } from './nuevo.component';
import { SharedModule } from './../../shared/shared.module';
import { Testing } from 'app/shared/testing';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';

describe('NuevoComponent', () => {
  let component: NuevoComponent;
  let fixture: ComponentFixture<NuevoComponent>;
  let testing: Testing;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        MovimientosComponent,
        NuevoComponent
      ]
    });
    fixture = TestBed.createComponent(NuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testing = new Testing(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the model on form submit', async(() => {
    const showButton: HTMLElement = testing.queryElementByCss('button');
    showButton.click();
    fixture.detectChanges();
    const importe: HTMLInputElement =  testing.queryElementByCss('input[name=importe]');
    const submitButton: HTMLElement = testing.queryElementByCss('button[name=guardar]');
    submitButton.click();
    const movimiento = component.movimientos[0];
    expect(movimiento.importe).toBe(0);
    expect(movimiento.tipo).toBe(1);
    expect(movimiento.categoria).toBe(1);
  }));

});
