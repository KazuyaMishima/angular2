import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSmartComponent } from './nuevo-smart.component';

describe('NuevoSmartComponent', () => {
  let component: NuevoSmartComponent;
  let fixture: ComponentFixture<NuevoSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
