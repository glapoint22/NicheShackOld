import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Review } from '../../shared/review/review';
import { QueryParametersService } from '../../query-parameters.service';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
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
  public reviewsPerPage = 10;
  public currentPage: number;
  public reviewsStart: number;
  public reviewsEnd: number;
  public positiveReview: Review;
  public negativeReview: Review;
  public reviews: Array<Review> = [];

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    public modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private queryParametersService: QueryParametersService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private dataService: DataService) { super(titleService, metaService, document) }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      //Scroll to top
      let body = document.scrollingElement || document.documentElement;
      body.scrollTop = 0;
    }



    this.dataService
      .get('api/Products/Review', [{ key: 'urlTitle', value: this.route.snapshot.params['product'] }])
      .subscribe(product => {
        this.product = product;

        this.title = 'Customer Reviews: ' + this.product.title;
        this.description = 'Read customer reviews for ' + this.product.title + ' and learn more about this item from our customers before you buy at NicheShack.com.';
        this.image = '/Images/' + this.product.shareImage;

        this.dataService.get('api/ProductReviews/PositiveNegative', [{ key: 'productId', value: this.product.id }])
          .subscribe(results => {
            this.positiveReview = results.positiveReview;
            this.negativeReview = results.negativeReview;
          });

        this.getReviews();
        super.ngOnInit();
      });


    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.queryParametersService.queryParams = queryParams;

      if (this.product.id) {
        this.getReviews();
      }
    });
  }

  backToItem() {
    this.router.navigate([this.product.urlTitle]);
  }

  getReviews() {
    this.currentPage = Number.parseInt(this.route.snapshot.queryParams['page']) || 1;

    this.dataService
      .get('api/ProductReviews', [{ key: 'productId', value: this.product.id },
      { key: 'orderBy', value: this.route.snapshot.queryParams['sort'] },
      { key: 'page', value: this.currentPage }
      ])
      .subscribe((reviews: Array<Review>) => {
        this.reviews = reviews;
        // Current page

        this.reviewsStart = this.reviewsPerPage * (this.currentPage - 1) + 1;
        this.reviewsEnd = this.reviewsStart + this.reviews.length - 1;
        this.pageCount = Math.ceil(this.product.totalReviews / this.reviewsPerPage);

        if (isPlatformBrowser(this.platformId)) {
          let reviewElement = document.getElementById('reviews');

          if (reviewElement) {
            window.scrollTo({
              top: reviewElement.offsetTop - 60,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      });
  }
}