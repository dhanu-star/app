import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apicomp2Component } from './apicomp2.component';

describe('Apicomp2Component', () => {
  let component: Apicomp2Component;
  let fixture: ComponentFixture<Apicomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apicomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apicomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
