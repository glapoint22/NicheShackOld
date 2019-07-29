import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss']
})
export class ReviewSummaryComponent {
  @Input() product: any;

  constructor(private router: Router){}

  onWriteReview() {
    this.router.navigate(['/reviews/write-review'], { queryParams: { 'id': this.product.id } });
  }
}
