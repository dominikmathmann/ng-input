import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { CustomernumberValidatorService } from './customernumber-validator.service';

@Directive({
  selector: '[gedCustomernumberValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CustomernumberValidatorDirective), multi: true }
  ]
})
export class CustomernumberValidatorDirective implements Validator {

  constructor(private customernumverValidatorService: CustomernumberValidatorService) { }

  validate(control: AbstractControl): ValidationErrors {
    return this.customernumverValidatorService.validate(control);
  }

  registerOnValidatorChange?(fn: () => void): void {
    // nothing to do
  }
}
