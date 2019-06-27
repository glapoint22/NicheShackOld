import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ArrowsModule } from '../../../shared/arrows/arrows.module';
import { PaginatorModule } from '../../../shared/paginator/paginator.module';
import { FeaturedCategoriesComponent } from './featured-categories/featured-categories.component';

@NgModule({
  declarations: [
    CarouselComponent,
    FeaturedCategoriesComponent
  ],
  imports: [
    CommonModule,
    ArrowsModule,
    PaginatorModule,
  ],
  exports: [
    CarouselComponent,
    FeaturedCategoriesComponent
  ]
})
export class HomeComponentsModule { }
