import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud2Component } from './crud2.component';

describe('Crud2Component', () => {
  let component: Crud2Component;
  let fixture: ComponentFixture<Crud2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crud2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
