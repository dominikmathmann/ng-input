import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomernumberInputComponent } from './customernumber-input.component';

describe('CustomernumberInputComponent', () => {
  let component: CustomernumberInputComponent;
  let fixture: ComponentFixture<CustomernumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomernumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomernumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
