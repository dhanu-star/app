import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdateComponent } from './setdate.component';

describe('SetdateComponent', () => {
  let component: SetdateComponent;
  let fixture: ComponentFixture<SetdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
