import { Component, OnChanges } from '@angular/core';
import { CheckboxFilterOptionsComponent } from '../checkbox-filter-options/checkbox-filter-options.component';

@Component({
  selector: 'checkbox-rating-filter-options',
  templateUrl: './checkbox-rating-filter-options.component.html',
  styleUrls: ['./checkbox-rating-filter-options.component.scss']
})
export class CheckboxRatingFilterOptionsComponent extends CheckboxFilterOptionsComponent implements OnChanges { }