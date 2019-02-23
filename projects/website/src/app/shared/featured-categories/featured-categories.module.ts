import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedCategoriesComponent } from './featured-categories.component';

@NgModule({
  declarations: [FeaturedCategoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [FeaturedCategoriesComponent]
})
export class FeaturedCategoriesModule { }
