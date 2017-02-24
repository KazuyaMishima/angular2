import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NuevoComponent } from './nuevo.component';
import { SharedModule } from './../../shared/shared.module';

describe('NuevoComponent', () => {
  let component: NuevoComponent;
  let fixture: ComponentFixture<NuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [NuevoComponent]
    });
    //initizalize(fixture, component);

    fixture = TestBed.createComponent(NuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the main element', () => {
    const main = queryByCss(fixture, 'main');
    expect(main).toBeFalsy();
  });

  it('should show main form on button mostrar click', () => {
    const button: DebugElement =  queryByCss(fixture, 'button[name=mostrar]');
    button.nativeElement.click();
    fixture.detectChanges();
    const h6: DebugElement =  queryByCss(fixture, 'main');
    expect(h6).toBeTruthy();
  });

  it('should hide main form on second button ocultar click', () => {
    let button: DebugElement =  queryByCss(fixture, 'button[name=mostrar]');
    button.nativeElement.click();
    fixture.detectChanges();
    button =  queryByCss(fixture, 'button[name=ocultar]');
    button.nativeElement.click();
    fixture.detectChanges();
    const h6: DebugElement =  queryByCss(fixture, 'main');
    expect(h6).toBeFalsy();
  });

});

function initizalize(fixture, component) {
  fixture = TestBed.createComponent(NuevoComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
}

function queryByCss(fixture, css: string) {
  return fixture.debugElement.query(By.css(css));
}
