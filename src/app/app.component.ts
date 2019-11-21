import { Component } from '@angular/core';
import { FormGroup, FormBuilder, CheckboxControlValueAccessor } from '@angular/forms';
import { log } from 'util';
import { CustomernumberValidatorService } from './customernumber-validator.service';

@Component({
  selector: 'ged-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder, private customernumberValidator: CustomernumberValidatorService) {

  }

  templateModelValue = 'C-123456';

  form = this.fb.group({
    customernumber1: ['C-123456', { validators: [this.customernumberValidator.validate], updateOn: 'blur' }],
    customernumber2: ['C-123456', { validators: [this.customernumberValidator.validate], updateOn: 'blur' }],
    customernumber3: ['C-123456', { validators: [this.customernumberValidator.validate] }],
    customernumber4: ['C-123456', { validators: [this.customernumberValidator.validate], updateOn: 'blur' }],
    customernumber5: ['C-123456', { validators: [this.customernumberValidator.validate] }]
  });

  submit() {
    console.log(this.form.value);
  }

  /**
   *
   * Simple Variante einer Konvertierung.
   *
   * Nachteil: diese Umwandlung ist nicht wiederverwendbar.
   *
   * @param formControlName Name des FormControls
   *
   */
  formatNumber(formControlName) {
    const control = this.form.controls[formControlName];
    if (control.value && control.valid && !/^C-.*?/.test(control.value)) {
      control.patchValue('C-' + control.value);
    }
  }
}
