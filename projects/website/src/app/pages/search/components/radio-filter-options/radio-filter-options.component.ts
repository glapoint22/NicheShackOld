import { Component, Input } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';
import { QueryParametersService } from 'projects/website/src/app/query-parameters.service';
import { FilterOption } from '../filter-option';

@Component({
  selector: 'radio-filter-options',
  templateUrl: './radio-filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class RadioFilterOptionsComponent extends FilterOptionsComponent {
  @Input() selectedOption: FilterOption;
  @Input() paramName: string;

  constructor(private queryParametersService: QueryParametersService) { super() }

  onChange(addRemoveParams) {
    this.queryParametersService.updateUrl('/search', addRemoveParams);
  }
}