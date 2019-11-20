import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationErrorMarkerComponent } from './validation-error-marker.component';

describe('ValidationErrorMarkerComponent', () => {
  let component: ValidationErrorMarkerComponent;
  let fixture: ComponentFixture<ValidationErrorMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationErrorMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationErrorMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
