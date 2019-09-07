import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todolist3Component } from './todolist3.component';

describe('Todolist3Component', () => {
  let component: Todolist3Component;
  let fixture: ComponentFixture<Todolist3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todolist3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todolist3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
