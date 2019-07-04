import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Review } from './review';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review: Review;

  constructor(private modalService: ModalService) { }

  onRateReviewClick(rating: number, review: any) {
    review.hasBeenRated = true;
  }

  onReportReviewClick() {
    this.modalService.reportReview.show = true;
    this.modalService.reportReview.reviewId = this.review.id;
  }
}
