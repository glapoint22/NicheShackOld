import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteReviewRoutingModule } from './write-review-routing.module';
import { WriteReviewComponent } from './write-review.component';
import { FormsModule } from '@angular/forms';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';

@NgModule({
  declarations: [WriteReviewComponent],
  imports: [
    CommonModule,
    WriteReviewRoutingModule,
    FormsModule,
    HeaderFooterModule,
  ]
})
export class WriteReviewModule { }
