import { Component, Input } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  template: '',
})
export class FilterOptionsComponent {
  @Input() filter: FilterComponent;
  @Input() options: Array<any> = [];
}