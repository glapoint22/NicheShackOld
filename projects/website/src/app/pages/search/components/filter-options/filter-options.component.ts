import { Component, Input } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { FilterOption } from '../filter-option';

@Component({
  template: '',
})
export class FilterOptionsComponent {
  @Input() filter: FilterComponent;
  @Input() options: Array<FilterOption>;
}