import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'checkbox',
  templateUrl: '../custom-input/custom-input.component.html',
  styleUrls: ['../custom-input/custom-input.component.scss', './checkbox.component.scss']
})
export class CheckboxComponent extends CustomInputComponent {}
