import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MovimientosComponent } from './movimientos/movimientos/movimientos.component';
import { MovimientosModule } from './movimientos/movimientos.module';
import { NuevoComponent } from './movimientos/nuevo/nuevo.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MovimientosModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Hola Mundo del Cash-Flow con Angular 2!!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hola Mundo del Cash-Flow con Angular 2!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hola Mundo del Cash-Flow con Angular 2!');
  }));
});
