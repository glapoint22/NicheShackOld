import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import { HeaderFooterModule } from '../../shared/header-footer/header-footer.module';
import { ReviewSummaryModule } from '../../shared/review-summary/review-summary.module';
import { StarsModule } from '../../shared/stars/stars.module';
import { ReviewModule } from '../../shared/review/review.module';
import { ReportReviewModule } from '../../shared/report-review/report-review.module';
import { PagingModule } from '../../shared/paging/paging.module';
import { ReviewSortModule } from '../../shared/review-sort/review-sort.module';

@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    HeaderFooterModule,
    ReviewSummaryModule,
    StarsModule,
    ReviewModule,
    ReportReviewModule,
    PagingModule,
    ReviewSortModule
  ]
})
export class ReviewsModule { }
