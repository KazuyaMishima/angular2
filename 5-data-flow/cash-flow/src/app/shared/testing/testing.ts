import { By } from '@angular/platform-browser';
import { element } from 'protractor';

export class Testing {
  constructor(private fixture) { }

  queryElementByCss(css: string) {
    return this.fixture.debugElement.query(By.css(css)).nativeElement;
  }

  queryAllByCss(css: string) {
    return this.fixture.debugElement.queryAll(By.css(css));
  }

  // importe.getAttribute('ng-reflect-model')

  getModelValue(element: HTMLElement) {
    return element.getAttribute('ng-reflect-model');
  }
}
