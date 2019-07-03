import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewSortComponent } from './review-sort.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReviewSortComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ReviewSortComponent]
})
export class ReviewSortModule { }
