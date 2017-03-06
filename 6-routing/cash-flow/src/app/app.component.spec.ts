/* tslint:disable:no-unused-variable */

import * as appIndex from './index';

import { TestBed, async } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appIndex.appTestConfig);
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(appIndex.AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'cf works!'`, async(() => {
    const fixture = TestBed.createComponent(appIndex.AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hola Mundo del Cash-Flow con Angular 2!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(appIndex.AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hola Mundo del Cash-Flow con Angular 2!');
  }));
});
