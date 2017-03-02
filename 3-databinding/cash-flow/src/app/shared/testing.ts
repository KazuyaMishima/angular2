import { By } from '@angular/platform-browser';

export class Testing {
  constructor(private fixture) { }

  queryElementByCss(css: string) {
    return this.fixture.debugElement.query(By.css(css)).nativeElement;
  }

  queryAllByCss(css: string) {
    return this.fixture.debugElement.queryAll(By.css(css));
  }
}
