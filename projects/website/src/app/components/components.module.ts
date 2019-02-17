import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowsComponent } from './arrows/arrows.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { CategoryFilterContentComponent } from './category-filter-content/category-filter-content.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxFilterOptionsComponent } from './checkbox-filter-options/checkbox-filter-options.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';
import { FilterComponent } from './filter/filter.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NoDataComponent } from './no-data/no-data.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { PriceFilterContentComponent } from './price-filter-content/price-filter-content.component';
import { ProductComponent } from './product/product.component';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RadioFilterOptionsComponent } from './radio-filter-options/radio-filter-options.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoPlayButtonComponent } from './video-play-button/video-play-button.component';

@NgModule({
  declarations: [
    ArrowsComponent,
    CarouselComponent,
    CategoryFilterComponent,
    CategoryFilterContentComponent,
    CheckboxComponent,
    CheckboxFilterOptionsComponent,
    CustomInputComponent,
    FeaturedCategoriesComponent,
    FilterComponent,
    FilterOptionsComponent,
    FooterComponent,
    MenuComponent,
    NoDataComponent,
    PaginatorComponent,
    PriceFilterComponent,
    PriceFilterContentComponent,
    ProductComponent,
    ProductsSliderComponent,
    RadioButtonComponent,
    RadioFilterOptionsComponent,
    SearchBarComponent,
    VideoPlayButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArrowsComponent,
    CarouselComponent,
    CategoryFilterComponent,
    CategoryFilterContentComponent,
    CheckboxComponent,
    CheckboxFilterOptionsComponent,
    CustomInputComponent,
    FeaturedCategoriesComponent,
    FilterComponent,
    FilterOptionsComponent,
    FooterComponent,
    MenuComponent,
    NoDataComponent,
    PaginatorComponent,
    PriceFilterComponent,
    PriceFilterContentComponent,
    ProductComponent,
    ProductsSliderComponent,
    RadioButtonComponent,
    RadioFilterOptionsComponent,
    SearchBarComponent,
    VideoPlayButtonComponent
  ]
})
export class ComponentsModule { }
