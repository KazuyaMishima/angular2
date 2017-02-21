import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MovimientosComponent } from './movimientos.component';
import { NuevoComponent } from './../nuevo/nuevo.component';
import { SharedModule } from './../../shared/shared.module';

describe('MovimientosComponent', () => {
  let component: MovimientosComponent;
  let fixture: ComponentFixture<MovimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ MovimientosComponent, NuevoComponent ]
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
