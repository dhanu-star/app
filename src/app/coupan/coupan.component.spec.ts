import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupanComponent } from './coupan.component';

describe('CoupanComponent', () => {
  let component: CoupanComponent;
  let fixture: ComponentFixture<CoupanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
