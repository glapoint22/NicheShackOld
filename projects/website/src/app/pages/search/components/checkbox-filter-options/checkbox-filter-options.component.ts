import { Component, OnChanges } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';
import { Option } from '../filter/option';
import { FilterOption } from '../filter-option';

@Component({
  selector: 'checkbox-filter-options',
  templateUrl: './checkbox-filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CheckboxFilterOptionsComponent extends FilterOptionsComponent implements OnChanges {
  onChange(selectedOption: Option) {
    let option: FilterOption = <FilterOption>selectedOption;

    this.filter.updateFilterParams({ filterName: this.filter.caption, option: option.id });
  }

  ngOnChanges() {
    let optionsArray = this.filter.getFilterOptions(this.filter.caption);

    //Check or uncheck the options
    if (optionsArray.length > 0) {
      for (let i = 0; i < this.options.length; i++) {
        this.options[i].checked = optionsArray.includes(this.getOption(<FilterOption>this.options[i]));
      }
    }
  }

  getOption(option: Option): string {
    let filterOption: FilterOption = <FilterOption>option
    return filterOption.id;
  }
}