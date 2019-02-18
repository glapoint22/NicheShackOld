import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { CategoryFilterContentComponent } from './components/category-filter-content/category-filter-content.component';
import { CheckboxFilterOptionsComponent } from './components/checkbox-filter-options/checkbox-filter-options.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { PriceFilterContentComponent } from './components/price-filter-content/price-filter-content.component';
import { RadioFilterOptionsComponent } from './components/radio-filter-options/radio-filter-options.component';

@NgModule({
  declarations: [
    CategoryFilterComponent,
    CategoryFilterContentComponent,
    CheckboxFilterOptionsComponent,
    FilterComponent,
    FilterOptionsComponent,
    PriceFilterComponent,
    PriceFilterContentComponent,
    RadioFilterOptionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryFilterComponent,
    CategoryFilterContentComponent,
    CheckboxFilterOptionsComponent,
    FilterComponent,
    FilterOptionsComponent,
    PriceFilterComponent,
    PriceFilterContentComponent,
    RadioFilterOptionsComponent
  ]
})
export class SearchModule { }
