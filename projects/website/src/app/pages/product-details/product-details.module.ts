import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from "./product-details.component";
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { StarsModule } from '../../shared/stars/stars.module';
import { ProductsSliderModule } from '../../shared/products-slider/products-slider.module';
import { QuickLookModule } from '../../shared/quick-look/quick-look.module';
import { MediaViewerModule } from '../../shared/media-viewer/media-viewer.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    HeaderFooterModule,
    StarsModule,
    ProductsSliderModule,
    QuickLookModule,
    MediaViewerModule
  ]
})
export class ProductDetailsModule { }
