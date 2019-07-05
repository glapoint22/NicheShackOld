import { Component, Input } from '@angular/core';
import { PriceFilterComponent } from '../price-filter/price-filter.component';

@Component({
  selector: 'price-filter-content',
  templateUrl: './price-filter-content.component.html',
  styleUrls: ['../filter/filter.component.scss', '../price-filter/price-filter.component.scss']
})
export class PriceFilterContentComponent {
  @Input() priceFilter: PriceFilterComponent;
}