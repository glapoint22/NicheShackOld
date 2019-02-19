import { Component, Input, OnChanges } from '@angular/core';
import { SearchComponent } from '../../search.component';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';

@Component({
  selector: 'checkbox-filter-options',
  templateUrl: './checkbox-filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CheckboxFilterOptionsComponent extends FilterOptionsComponent implements OnChanges {
  @Input() searchComponent: SearchComponent;

  ngOnChanges() {
    let optionsArray = this.searchComponent.getOptionsFromQueryParams(this.parent.caption);

    //Check or uncheck the options
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].checked = optionsArray.includes(this.options[i].name);
    }
  }
}