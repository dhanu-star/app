import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescorderComponent } from './descorder.component';

describe('DescorderComponent', () => {
  let component: DescorderComponent;
  let fixture: ComponentFixture<DescorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
