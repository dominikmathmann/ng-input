import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomernumberValidatorService {

  private static readonly PATTERN = /^(C-)*\d{6}$/;

  validate(ctrl: AbstractControl) {
    const value = ctrl.value;
    const valid = CustomernumberValidatorService.PATTERN.test(value);
    if (value && !valid) {
      return {
        pattern: 'Ungültiges Format'
      };
    }

    return {};

  }
}
