import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSmartComponent } from './lista-smart.component';

describe('ListaSmartComponent', () => {
  let component: ListaSmartComponent;
  let fixture: ComponentFixture<ListaSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
