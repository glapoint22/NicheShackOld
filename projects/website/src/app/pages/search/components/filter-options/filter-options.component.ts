import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export class FilterOptionsComponent {
  @Input() parent: any = {};
  @Input() options: Array<any> = [];
}