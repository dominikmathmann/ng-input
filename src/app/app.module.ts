import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidationErrorMarkerComponent } from './validation-error-marker/validation-error-marker.component';
import { CustomernumberFormatterDirective } from './customernumber-formatter.directive';
import { CustomernumberFormatterAccessorDirective } from './customernumber-formatter-accessor.directive';
import { InputComponent } from './input/input.component';
import { CustomernumberInputComponent } from './customernumber-input/customernumber-input.component';
import { CustomernumberValidatorDirective } from './customernumber-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ValidationErrorMarkerComponent,
    CustomernumberFormatterDirective,
    CustomernumberFormatterAccessorDirective,
    InputComponent,
    CustomernumberInputComponent,
    CustomernumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
