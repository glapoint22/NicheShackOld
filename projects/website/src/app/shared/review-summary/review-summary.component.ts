import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss']
})
export class ReviewSummaryComponent implements OnInit {
  @Input() product: Product;
  public reviewStats: Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // 5 Stars
    this.reviewStats.push({
      name: '5 Stars',
      percentage: this.product.fiveStars
    });

     // 4 Stars
     this.reviewStats.push({
      name: '4 Stars',
      percentage: this.product.fourStars
    });

     // 3 Stars
     this.reviewStats.push({
      name: '3 Stars',
      percentage: this.product.threeStars
    });

    // 2 Stars
    this.reviewStats.push({
      name: '2 Stars',
      percentage: this.product.twoStars
    });

    // 1 Star
    this.reviewStats.push({
      name: '1 Star',
      percentage: this.product.oneStar
    });
  }

  onWriteReview() {
    this.router.navigate(['/reviews/write-review'], { queryParams: { 'id': this.product.id } });
  }
}
