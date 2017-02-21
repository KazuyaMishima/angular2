import { TestBed, async } from '@angular/core/testing';

import { MovimientosComponent } from './movimientos.component';

describe('MovimientosComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovimientosComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MovimientosComponent);
    const componente = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
