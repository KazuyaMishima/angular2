import { By } from '@angular/platform-browser';

export class Testing {
  constructor(private fixture) { }
  queryByCss(css: string) {
    return this.fixture.debugElement.query(By.css(css)).nativeElement;
  }
}
