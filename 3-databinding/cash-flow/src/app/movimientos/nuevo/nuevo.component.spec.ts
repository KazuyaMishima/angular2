import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MovimientosComponent } from './../movimientos/movimientos.component';
import { NuevoComponent } from './nuevo.component';
import { SharedModule } from './../../shared/shared.module';
import { Testing } from 'app/shared/testing';

let component: NuevoComponent;
let fixture: ComponentFixture<NuevoComponent>;
let testing: Testing;

describe('NuevoComponent', () => {
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

  it('should have tiposMovimiento', () => {
    expect(component.tiposMovimiento.length).toBe(2);
  });

  it('should render two radioButtons', () => {
    showForm();
    const inputs = testing.queryAllByCss('input[type="radio"]');
    const spans = testing.queryAllByCss('span[name="textoTipo"]');
    expect(inputs.length).toBe(2);
    expect(spans[0].nativeElement.textContent).toBe('Ingreso');
    expect(spans[1].nativeElement.textContent).toBe('Gasto');
  });

  it('should render three options', () => {
    showForm();
    const options: DebugElement[] = testing.queryAllByCss('option');
    expect(options.length).toBe(3);
    expect(options[0].nativeElement.textContent).toContain('Nómina');
    expect(options[1].nativeElement.textContent).toContain('Ventas');
    expect(options[2].nativeElement.textContent).toContain('Intereses');
  });

  it('should update the model on form submit', () => {
    showForm();
    const submitButton: HTMLElement = testing.queryElementByCss('button[name=guardar]');
    submitButton.click();
    const movimiento = component.movimientos[0];
    expect(movimiento.importe).toBe(0);
    expect(movimiento.tipo).toBe(1);
    expect(movimiento.categoria).toBe(1);
  });
});


function showForm(){
  const showButton: HTMLElement = testing.queryElementByCss('button');
  showButton.click();
  fixture.detectChanges();
}
