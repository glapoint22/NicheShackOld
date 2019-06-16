import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'price-filter',
  templateUrl: '../filter/filter.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class PriceFilterComponent extends FilterComponent implements OnInit {
  @Input() hostComponent: any;
  @Output() onSetFilter = new EventEmitter<any>();
  @Input() dataComplete: Subject<void>;
  public min: string;
  public max: string;
  public showClearPrice: boolean;

  ngOnInit() {
    this.dataComplete.subscribe(() => {
      let priceRange = this.getPriceRange();

      //If there is a custom price range, set the min and max properties
      if (priceRange) {
        this.min = priceRange.min;
        this.max = priceRange.max;
        this.showClearPrice = true;
      } else {
        this.showClearPrice = false;
        this.min = '';
        this.max = '';
      }
    });
  }


  onSubmit(priceForm) {
    if (!priceForm.form.controls.min.value && !priceForm.form.controls.max.value) {
      priceForm.submitted = false;
      this.showClearPrice = false;
      return;
    }

    //If price range is valid, set the filter
    if (priceForm.valid) {
      this.onSetFilter.emit({ filterName: 'Price', option: '[' + Math.min(Number(this.min), Number(this.max)) + '-' + Math.max(Number(this.min), Number(this.max)) + ']' });
      priceForm.submitted = false;
    } else {
      if (priceForm.form.controls.min.value || priceForm.form.controls.max.value) this.showClearPrice = true;
    }
  }

  getPriceRange() {
    let priceRange: any, optionsArray = this.hostComponent.getOptionsFromQueryParams(this.caption), regEx = new RegExp(/\[(\d+\.?(?:\d+)?)-(\d+\.?(?:\d+)?)\]/, 'g');

    //Iterate through all the options
    for (let i = 0; i < optionsArray.length; i++) {
      let result = regEx.exec(optionsArray[i]);

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

    //If there is an custom price range, set the filter with the same price range and it will clear it from the url
    if (priceRange) {
      this.onSetFilter.emit({ filterName: 'Price', option: '[' + priceRange.min + '-' + priceRange.max + ']' });
    }
  }
}