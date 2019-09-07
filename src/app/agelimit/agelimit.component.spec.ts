import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgelimitComponent } from './agelimit.component';

describe('AgelimitComponent', () => {
  let component: AgelimitComponent;
  let fixture: ComponentFixture<AgelimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgelimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgelimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
