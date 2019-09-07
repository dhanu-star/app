import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicompComponent } from './apicomp.component';

describe('ApicompComponent', () => {
  let component: ApicompComponent;
  let fixture: ComponentFixture<ApicompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApicompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
