import { Component, OnInit, ViewChild, ElementRef, Input, forwardRef, Injector, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel, NgControl } from '@angular/forms';
import { Type } from '@angular/core';

@Component({
  selector: 'ged-customernumber-input',
  templateUrl: './customernumber-input.component.html',
  styleUrls: ['./customernumber-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomernumberInputComponent),
      multi: true
    }
  ]
})
export class CustomernumberInputComponent implements ControlValueAccessor {

  value: string;

  disabled: boolean;

  touched: boolean;

  changeFn: (_: any) => void;

  touchFn: () => void;

  invalid: boolean;

  @ViewChild('input', { static: false })
  inputElement: ElementRef;

  constructor(private injector: Injector) { }

  onBlur() {
    this.update();
  }

  onFocus() {
    this.touchFn();
  }

  onChange(event) {
    this.value = event.target.value;
  }

  get control(): NgControl {
    return this.injector.get<NgControl>(NgControl as Type<NgControl>);
  }

  private update() {
    const ele: HTMLInputElement = this.inputElement.nativeElement;
    this.changeFn(ele.value);

    this.touched = true;
    this.invalid = !this.control.valid;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
