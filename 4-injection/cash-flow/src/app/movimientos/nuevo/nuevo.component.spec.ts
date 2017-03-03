import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DatosService } from './../datos.service';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';
import { MovimientosComponent } from './../movimientos/movimientos.component';
import { NuevoComponent } from './nuevo.component';
import { SharedModule } from './../../shared/shared.module';
import { Testing } from 'app/shared/testing';

let component: NuevoComponent;
let fixture: ComponentFixture<NuevoComponent>;
let testing: Testing;
let datosService: DatosService;

describe('NuevoComponent', () => {
  beforeEach(() => {
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
    });
    fixture = TestBed.createComponent(NuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testing = new Testing(fixture);
    datosService = TestBed.get(DatosService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tiposMovimiento after init', () => {
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
    const options = testing.queryAllByCss('option');
    expect(options.length).toBe(3);
    expect(options[0].nativeElement.textContent).toContain('Nómina');
    expect(options[1].nativeElement.textContent).toContain('Ventas');
    expect(options[2].nativeElement.textContent).toContain('Intereses');
  });

  it('should call alGuardarMovimiento on form submit', () => {
    spyOn(component, 'alGuardarMovimiento').and.callThrough();
    testing.queryElementByCss('button[name="guardar"]').click();
    expect(component.alGuardarMovimiento).toHaveBeenCalled();
  });

  it('should call postMovimiento on form submit', () => {
    spyOn(datosService, 'postMovimiento').and.callThrough();
    testing.queryElementByCss('button[name="guardar"]').click();
    expect(datosService.postMovimiento).toHaveBeenCalled();
  });
});


function showForm() {
  component.ngOnInit();
  const showButton: HTMLElement = testing.queryElementByCss('button');
  showButton.click();
  fixture.detectChanges();
}
