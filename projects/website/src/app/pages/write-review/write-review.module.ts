import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteReviewRoutingModule } from './write-review-routing.module';
import { WriteReviewComponent } from './write-review.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WriteReviewComponent],
  imports: [
    CommonModule,
    WriteReviewRoutingModule,
    FormsModule
  ]
})
export class WriteReviewModule { }
