import { Component, OnChanges } from '@angular/core';
import { CheckboxFilterOptionsComponent } from '../checkbox-filter-options/checkbox-filter-options.component';

@Component({
  selector: 'checkbox-price-filter-options',
  templateUrl: '../checkbox-filter-options/checkbox-filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CheckboxPriceFilterOptionsComponent extends CheckboxFilterOptionsComponent implements OnChanges {
  
  onChange(selectedOption: string) {
    // change the selected option string (i.e from $10 - $20 to 10-20)
    let option = this.options.find(x => x.name == selectedOption);
    selectedOption = option.min + '-' + option.max;

    super.onChange(selectedOption);
  }


  ngOnChanges() {
    // change the options (i.e from 10-20 to $10 - $20)
    this.options.forEach(x => {
      x.name = '$' + x.min.toLocaleString() + ' - $' + x.max.toLocaleString();
    });
    super.ngOnChanges();
  }
}