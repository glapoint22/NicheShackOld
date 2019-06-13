import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { VideoPlayButtonComponent } from './video-play-button/video-play-button.component';
import { StarsModule } from '../stars/stars.module';

@NgModule({
  declarations: [
    ProductComponent,
    VideoPlayButtonComponent
  ],
  imports: [
    CommonModule,
    StarsModule
  ],
  exports: [
    ProductComponent,
    VideoPlayButtonComponent
  ]
})
export class ProductModule { }
