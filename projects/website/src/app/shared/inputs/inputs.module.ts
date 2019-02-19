import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    CheckboxComponent,
    CustomInputComponent,
    RadioButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckboxComponent,
    CustomInputComponent,
    RadioButtonComponent
  ]
})
export class InputsModule { }
