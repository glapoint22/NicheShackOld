import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CategoryFilterContentComponent } from './category-filter-content/category-filter-content.component';
import { CheckboxFilterOptionsComponent } from './checkbox-filter-options/checkbox-filter-options.component';
import { FilterComponent } from './filter/filter.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { PriceFilterContentComponent } from './price-filter-content/price-filter-content.component';
import { RadioFilterOptionsComponent } from './radio-filter-options/radio-filter-options.component';
import { MaxItemsPipe } from './max-items.pipe';
import { FormsModule } from '@angular/forms';
import { InputsModule } from 'src/app/components/inputs/inputs.module';

@NgModule({
  declarations: [
    CategoryFilterComponent,
    CategoryFilterContentComponent,
    CheckboxFilterOptionsComponent,
    FilterComponent,
    FilterOptionsComponent,
    PriceFilterComponent,
    PriceFilterContentComponent,
    RadioFilterOptionsComponent,
    MaxItemsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputsModule
  ],
  exports: [
    CategoryFilterComponent,
    CategoryFilterContentComponent,
    CheckboxFilterOptionsComponent,
    FilterComponent,
    FilterOptionsComponent,
    PriceFilterComponent,
    PriceFilterContentComponent,
    RadioFilterOptionsComponent,
    MaxItemsPipe
  ]
})
export class SearchComponentsModule { }
