import { Directive, Renderer2, ElementRef, forwardRef, Injector, HostListener } from '@angular/core';
import { DefaultValueAccessor, ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { log } from 'util';

@Directive({
  selector: '[gedCustomernumberFormatter]'
})
export class CustomernumberFormatterDirective {

  constructor(private el: ElementRef, private renderer: Renderer2, private control: NgControl) { }

  @HostListener('blur', ['$event.target.value'])
  onBlur(val: string) {
    if (this.control.valid && val && !/^C-.*/.test(val)) {
      this.renderer.setProperty(this.el.nativeElement, 'value', 'C-' + val);
    }
  }
}
