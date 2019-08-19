import { Component, OnChanges } from '@angular/core';
import { CheckboxFilterOptionsComponent } from '../checkbox-filter-options/checkbox-filter-options.component';
import { PriceFilterOption } from '../filter/price-filter-option';

@Component({
  selector: 'checkbox-price-filter-options',
  templateUrl: '../checkbox-filter-options/checkbox-filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CheckboxPriceFilterOptionsComponent extends CheckboxFilterOptionsComponent implements OnChanges {
  
  onChange(selectedOption: PriceFilterOption) {
    this.filter.updateFilterParams({ filterName: this.filter.caption, option:  this.getOption(selectedOption)});
  }

  getOption(option: PriceFilterOption){
    return option.min + '-' + option.max
  }
}