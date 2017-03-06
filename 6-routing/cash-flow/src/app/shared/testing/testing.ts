import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export class Testing {
  constructor(private fixture) { }

  queryElementByCss(css: string): HTMLElement {
    return this.fixture.debugElement.query(By.css(css)).nativeElement;
  }

  queryAllByCss(css: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(css));
  }

  // importe.getAttribute('ng-reflect-model')

  getModelValue(element: HTMLElement) {
    return element.getAttribute('ng-reflect-model');
  }
}