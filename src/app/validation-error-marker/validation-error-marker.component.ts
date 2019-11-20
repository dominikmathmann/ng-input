import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ged-validation-error-marker',
  templateUrl: './validation-error-marker.component.html',
  styleUrls: ['./validation-error-marker.component.scss']
})
export class ValidationErrorMarkerComponent implements OnChanges {

  @Input()
  control: FormControl;

  constructor() { }

  ngOnChanges() {

  }

  get visible() {
    return this.control && !this.control.valid;
  }

  get message() {
    const errors = this.control.errors;
    return Object.keys(errors).map(errorKey => `${errorKey} : ${errors[errorKey]}`).join(', ');
  }


}
