import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tolist1Component } from './tolist1.component';

describe('Tolist1Component', () => {
  let component: Tolist1Component;
  let fixture: ComponentFixture<Tolist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tolist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tolist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
