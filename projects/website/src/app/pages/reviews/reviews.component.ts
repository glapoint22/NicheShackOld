import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Review } from '../../shared/review/review';
import { QueryParametersService } from '../../query-parameters.service';
import { DOCUMENT } from '@angular/common';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { Product } from '../../shared/product/product';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent extends Page implements OnInit {
  public product: Product = new Product();
  public pageCount: number;
  public reviewsPerPage;
  public currentPage: number;
  public reviewsStart: number;
  public reviewsEnd: number;
  public positiveReview: Review;
  public negativeReview: Review;
  public reviews: Array<Review> = [];
  public sortOptions: Array<any> = [];

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    public modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private queryParametersService: QueryParametersService,
    private dataService: DataService) { super(titleService, metaService, document) }

  ngOnInit() {
    this.currentPage = Number.parseInt(this.route.snapshot.queryParams['page']) || 1;

    this.dataService
      .get('api/ProductReviews/All',
        [
          { key: 'urlTitle', value: this.route.snapshot.params['product'] },
          { key: 'orderBy', value: this.route.snapshot.queryParams['sort'] },
          { key: 'page', value: this.currentPage }
        ])
      .subscribe(results => {
        // Product
        this.product = results.product;

        // Positive & negateive reviews
        this.positiveReview = results.positiveReview;
        this.negativeReview = results.negativeReview;

        // Reviews
        this.reviews = results.reviews;

        // Sort options
        this.sortOptions = results.options;

        // Reviews per page
        this.reviewsPerPage = results.reviewsPerPage;

        // Set reviews information
        this.setReviewsInfo();

        // Page properties
        this.title = 'Customer Reviews: ' + this.product.title;
        this.description = 'Read customer reviews for ' + this.product.title + ' and learn more about this item from our customers before you buy at NicheShack.com.';
        this.image = '/Images/' + this.product.shareImage;

        // Call base
        super.ngOnInit();
      });


    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.queryParametersService.queryParams = queryParams;

      // Only get reviews if we have a product
      if (this.product.id) {
        this.getReviews();
      }
    });
  }

  backToItem() {
    this.router.navigate([this.product.urlTitle]);
  }

  getReviews() {
    // Scroll to the top of the reviews section of the page
    let reviewsElement = document.getElementById('reviews');
    if (reviewsElement) {
      window.scrollTo({
        top: reviewsElement.offsetTop - 80,
        left: 0,
        behavior: 'smooth'
      });
    }

    // Get the current page number from the query params
    this.currentPage = Number.parseInt(this.route.snapshot.queryParams['page']) || 1;

    
    // Get the reviews from the databasse
    this.dataService
      .get('api/ProductReviews',
        [
          { key: 'productId', value: this.product.id },
          { key: 'orderBy', value: this.route.snapshot.queryParams['sort'] },
          { key: 'page', value: this.currentPage }
        ])
      .subscribe((reviews: Array<Review>) => {
        this.reviews = reviews;
        this.setReviewsInfo();
      });
  }

  setReviewsInfo() {
    this.reviewsStart = this.reviewsPerPage * (this.currentPage - 1) + 1;
    this.reviewsEnd = this.reviewsStart + this.reviews.length - 1;
    this.pageCount = Math.ceil(this.product.totalReviews / this.reviewsPerPage);
  }

  trackReview(index: number, review: Review) {
    return review.id;
  }
}