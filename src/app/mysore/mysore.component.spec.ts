import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysoreComponent } from './mysore.component';

describe('MysoreComponent', () => {
  let component: MysoreComponent;
  let fixture: ComponentFixture<MysoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
