import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandyaComponent } from './mandya.component';

describe('MandyaComponent', () => {
  let component: MandyaComponent;
  let fixture: ComponentFixture<MandyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
