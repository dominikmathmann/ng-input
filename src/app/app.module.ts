import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidationErrorMarkerComponent } from './validation-error-marker/validation-error-marker.component';
import { CustomernumberFormatterDirective } from './customernumber-formatter.directive';
import { CustomernumberFormatterAccessorDirective } from './customernumber-formatter-accessor.directive';
import { InputComponent } from './input/input.component';
import { CustomernumberInputComponent } from './customernumber-input/customernumber-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationErrorMarkerComponent,
    CustomernumberFormatterDirective,
    CustomernumberFormatterAccessorDirective,
    InputComponent,
    CustomernumberInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
