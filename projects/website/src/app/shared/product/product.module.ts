import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { VideoPlayButtonComponent } from './video-play-button/video-play-button.component';

@NgModule({
  declarations: [
    ProductComponent,
    VideoPlayButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    VideoPlayButtonComponent
  ]
})
export class ProductModule { }
