/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MovimientosModule } from './movimientos/movimientos.module'; // Módulo funcional propio
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module'; // Módulo propio compartido

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ // cosas declaradas en este módulo
    AppComponent
  ],
  imports: [ // otros módulos que necesitamos para que este funcione
    BrowserModule,
    MovimientosModule,
    SharedModule
  ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'cf works!'`, async(() => {
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
