import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Review } from '../../shared/review/review';
import { ValidationPage } from '../validation-page/Validation-page';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { DataService } from 'src/app/services/data/data.service';
import { Product } from '../../shared/product/product';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent extends ValidationPage implements OnInit {
  public review: Review = new Review();
  public product: Product;
  public submitted: boolean;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) { super(titleService, metaService, document, platformId); }

  ngOnInit() {
    this.title = 'Write a Review';
    this.share = false;


    this.dataService
      .get('api/Products/WriteReview', [{ key: 'id', value: this.route.snapshot.queryParams['id'] }])
      .subscribe(product => {
        this.product = product;
      });
    super.ngOnInit();
  }

  submitData() {
    let review = {
      ProductId: this.product.id,
      Title: this.review.title,
      Rating: this.review.rating,
      Username: this.review.username,
      Text: this.review.text
    }

    this.dataService.post('api/ProductReviews', review).subscribe(() => {
      this.submitted = true;
    });

  }

  getStar(i: number) {
    if (i <= Math.floor(this.review.rating)) {
      return 'fas fa-star';
    } else {
      return 'far fa-star';
    }
  }

  goHome() {
    this.router.navigate(['']);
  }
}