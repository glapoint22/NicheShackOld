import { Component, Input } from '@angular/core';

@Component({
  selector: 'review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss']
})
export class ReviewSummaryComponent {
  @Input() product: any;
}
