import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Review } from './review';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review: Review;
  @Input() showReviewHelpful: boolean = true;

  constructor(private modalService: ModalService, private dataService: DataService) { }

  onRateReviewClick(likes: number, dislikes: number) {
    this.dataService
      .put('api/ProductReviews', {
        reviewId: this.review.id,
        likes: likes,
        dislikes: dislikes
      })
      .subscribe(() => {
        this.review.hasBeenRated = true;
      });

  }

  onReportReviewClick() {
    this.modalService.reportReview.show = true;
    this.modalService.reportReview.reviewId = this.review.id;
  }

  formatDate(date: Date): string {
    return new Date(date).toDateString();
  }
}
