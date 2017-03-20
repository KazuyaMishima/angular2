import * as appIndex from './index';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { Testing } from './shared/testing/testing';

/* tslint:disable:no-unused-variable */





describe('AppComponent', () => {
  let fixture: ComponentFixture<appIndex.AppComponent>;
  let component: appIndex.AppComponent;
  let testing: Testing;

  beforeEach(() => {
    TestBed.configureTestingModule(appIndex.appTestConfig);
    fixture = TestBed.createComponent(appIndex.AppComponent);
    component = fixture.debugElement.componentInstance;
    testing = new Testing(fixture);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'cf works!'`, () => {
    expect(component.title).toEqual('Hola Mundo del Cash-Flow con Angular 2!');
  });

  it('should render title in a h1 tag', async(() => {
    expect(testing.queryElementByCss('h1').textContent).toContain('Hola Mundo del Cash-Flow con Angular 2!');
  }));

  it('should render routerLinks', () => {
    const aTags: DebugElement[] = testing.queryAllByCss('a');
    expect(aTags[0].nativeElement.getAttribute('routerLink')).toBe('/');
    expect(aTags[1].nativeElement.getAttribute('routerLink')).toBe('/movimientos');
  });

  it('should render routerOutlet', () => {
    const routerOutlet = testing.queryElementByCss('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  it('should fill routerOutlet when routerLink clicked', async(() => {
    const aTags: DebugElement[] = testing.queryAllByCss('a');
    aTags[1].nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const routerOutletComponent = testing.queryElementByCss('cf-movimientos');
      expect(routerOutletComponent).toBeTruthy();
    })
  }));
});
