import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSliderComponent } from './products-slider.component';
import { ProductModule } from '../product/product.module';
import { ArrowsModule } from '../arrows/arrows.module';

@NgModule({
  declarations: [
    ProductsSliderComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    ArrowsModule
  ],
  exports: [ProductsSliderComponent]
})
export class ProductsSliderModule { }
