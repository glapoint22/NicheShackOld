import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export class CustomInputComponent {
  @Input() name: string;
  @Input() type: string;
  @Input() value: any;
  @Input() label: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
}