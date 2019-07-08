import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'price-filter',
  templateUrl: '../filter/filter.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class PriceFilterComponent extends FilterComponent {
  public min: string;
  public max: string;
  public showClearPrice: boolean;

  setCustomPriceRange() {
    let customPriceRange = this.getPriceRange();

    //If there is a custom price range, set the min and max properties
    if (customPriceRange) {
      this.min = customPriceRange.min;
      this.max = customPriceRange.max;
      this.showClearPrice = true;
    } else {
      this.showClearPrice = false;
      this.min = '';
      this.max = '';
    }
  }


  onSubmit(priceForm) {
    if (!priceForm.form.controls.min.value && !priceForm.form.controls.max.value) {
      priceForm.submitted = false;
      this.showClearPrice = false;
      return;
    }

    //If price range is valid, set the filter
    if (priceForm.valid) {
      let priceRange = this.getPriceRange();

      if (!priceRange || priceRange.min != this.min || priceRange.max != this.max) {
        this.updateFilterParams({ filterName: 'Price', option: Math.min(Number(this.min), Number(this.max)) + '-' + Math.max(Number(this.min), Number(this.max)) });
        priceForm.submitted = false;
      }
    } else {
      if (priceForm.form.controls.min.value || priceForm.form.controls.max.value) this.showClearPrice = true;
    }
  }

  getPriceRange() {
    let priceRange: any
    let filterOptions = this.getFilterOptions(this.caption);
    let regEx = new RegExp(/(\d+\.?(?:\d+)?)-(\d+\.?(?:\d+)?)/, 'g');

    //Iterate through all the options
    for (let i = 0; i < filterOptions.length; i++) {
      let result = regEx.exec(filterOptions[i]);

      //If result contains a custom price range, set the min and max to the price range object
      if (result) {
        priceRange = {};
        priceRange['min'] = result[1];
        priceRange['max'] = result[2];
      }
    }
    return priceRange;
  }

  clearPrice(priceForm) {
    //Get the price range from the url
    let priceRange = this.getPriceRange();

    this.min = undefined;
    this.max = undefined;
    this.showClearPrice = false;
    priceForm.submitted = false;

    //Set the filter with the same price range and it will clear it from the url
    if (priceRange) {
      this.updateFilterParams({ filterName: 'Price', option: priceRange.min + '-' + priceRange.max });
    }
  }
}