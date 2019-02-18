import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSliderComponent } from './components/products-slider/products-slider.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsSliderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsSliderComponent,
    CarouselComponent
  ]
})
export class HomeModule { }
