import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideserveComponent } from './sideserve.component';

describe('SideserveComponent', () => {
  let component: SideserveComponent;
  let fixture: ComponentFixture<SideserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
