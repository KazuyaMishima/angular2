import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NuevoComponent } from './nuevo.component';
import { SharedModule } from './../../shared/shared.module';

let component: NuevoComponent;
let fixture: ComponentFixture<NuevoComponent>;
describe('NuevoComponent', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [NuevoComponent]
    });
    initizalize();

    // fixture = TestBed.createComponent(NuevoComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the main element', () => {
    const main = queryByCss('main');
    expect(main).toBeFalsy();
  });

  it('should show main form on button mostrar click', () => {
    const button: DebugElement = queryByCss('button[name=mostrar]');
    button.nativeElement.click();
    fixture.detectChanges();
    const main: DebugElement = queryByCss('main');
    expect(main).toBeTruthy();
  });

  it('should hide main form on second button ocultar click', () => {
    const button: DebugElement = queryByCss('button[name=mostrar]');
    button.nativeElement.click();
    fixture.detectChanges();
    const button2 = queryByCss('button[name=ocultar]');
    button2.nativeElement.click();
    fixture.detectChanges();
    const main: DebugElement = queryByCss('main');
    expect(main).toBeFalsy();
  });

});

function initizalize() {
  fixture = TestBed.createComponent(NuevoComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
}

function queryByCss(css: string) {
  return fixture.debugElement.query(By.css(css));
}
