import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ArrowsModule } from '../../../shared/arrows/arrows.module';
import { PaginatorModule } from '../../../shared/paginator/paginator.module';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { ProductModule } from '../../../shared/product/product.module';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';

@NgModule({
  declarations: [
    CarouselComponent,
    FeaturedCategoriesComponent,
    ProductsSliderComponent
  ],
  imports: [
    CommonModule,
    ArrowsModule,
    PaginatorModule,
    ProductModule
  ],
  exports: [
    CarouselComponent,
    FeaturedCategoriesComponent,
    ProductsSliderComponent
  ]
})
export class HomeComponentsModule { }
