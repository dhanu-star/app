import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnorderComponent } from './unorder.component';

describe('UnorderComponent', () => {
  let component: UnorderComponent;
  let fixture: ComponentFixture<UnorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
