import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFormComponent } from './validation-form.component';

@NgModule({
  declarations: [ValidationFormComponent],
  imports: [
    CommonModule
  ],
  exports: [ValidationFormComponent]
})
export class ValidationFormModule { }
