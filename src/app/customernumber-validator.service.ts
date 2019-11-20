import { Injectable } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomernumberValidatorService implements Validator {

  private static readonly PATTERN = /^(C-)*\d{6}$/;

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    const valid = CustomernumberValidatorService.PATTERN.test(value);
    if (value && !valid) {
      return {
        pattern: 'Ungültiges Format'
      };
    }

  }


  constructor() { }
}
