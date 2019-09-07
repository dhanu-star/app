import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendingComponent } from './descending.component';

describe('DescendingComponent', () => {
  let component: DescendingComponent;
  let fixture: ComponentFixture<DescendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
