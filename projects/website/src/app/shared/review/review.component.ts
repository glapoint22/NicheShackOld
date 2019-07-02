import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review: any;

  constructor(public modalService: ModalService) { }

  onRateReviewClick(rating: number, review: any) {
    review.hasBeenRated = true;
  }
}
