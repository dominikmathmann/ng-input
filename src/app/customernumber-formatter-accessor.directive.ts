import { Directive, forwardRef, Injector, ElementRef, Renderer, Renderer2, HostListener } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[gedCustomernumberFormatterAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomernumberFormatterAccessorDirective),
      multi: true
    }
  ]
})
export class CustomernumberFormatterAccessorDirective implements ControlValueAccessor {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  updateValue: any;
  touched: any;

  writeValue(obj: any): void {
    obj = obj.replace('C-', '');
    this.renderer.setProperty(this.el.nativeElement, 'value', obj);
  }

  registerOnChange(fn: any): void {
    this.updateValue = fn;
  }

  @HostListener('blur', ['$event'])
  onInput(event: any) {
    this.touched();
    let val = event.target.value;

    if (!/^C-/.test(val)) {
      val = 'C-' + val;
    }

    this.updateValue(val);
  }


  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // no work to do
  }


}
