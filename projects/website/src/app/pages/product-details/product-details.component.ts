import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsSlider } from '../../shared/products-slider/products-slider';
import { QueryParametersService } from '../../query-parameters.service';
import { SharePage } from '../share-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { Product } from '../../shared/product/product';
import { DataService } from 'src/app/services/data/data.service';
import { Review } from '../../shared/review/review';
import { ProductContent } from '../../shared/product/product-content';
import { ProductPricePoint } from '../../shared/product/product-price-point';
import { ProductMedia } from '../../shared/product/product-media';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent extends SharePage implements OnInit {
  public product: Product = new Product();
  public content: Array<ProductContent> = [];
  public pricePoints: Array<ProductPricePoint> = [];
  public media: Array<ProductMedia> = [];
  public productsSlider: Array<ProductsSlider>;
  private onCloseSubscription: Subscription;
  public reviews: Array<Review> = [];
  public reviewsPerPage: number;
  public sortOptions: Array<any> = [];

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private route: ActivatedRoute,
    public modalService: ModalService,
    private router: Router,
    private queryParametersService: QueryParametersService,
    private dataService: DataService
  ) { super(titleService, metaService, document) }


  ngOnInit() {
    let productData = this.route.snapshot.data['productData'];

    this.product = productData.product;
    this.content = productData.content;
    this.pricePoints = productData.pricePoints;
    this.media = productData.media;
    this.reviews = productData.reviews;

    // Sort options
    this.sortOptions = productData.options;

    // Reviews per page
    this.reviewsPerPage = productData.reviewsPerPage;

    // Set the page properties
    this.title = this.product.title;
    this.description = this.product.description;
    this.image = '/Images/' + this.product.shareImage;
    super.ngOnInit();

    // ***************************** TODO: Get product group data *****************************************
    this.productsSlider = null;

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.queryParametersService.queryParams = queryParams;
      if (this.product.id) {
        this.getReviews();
      }
    });
  }

  getReviews() {
    this.dataService
      .get('api/ProductReviews', [{ key: 'productId', value: this.product.id }, { key: 'orderBy', value: this.route.snapshot.queryParams['sort'] }])
      .subscribe((reviews: Array<Review>) => {
        this.reviews = reviews;
      });
  }

  hasPricePoint(priceIndices: Array<number>, index: number): boolean {
    return priceIndices.some(x => x == index);
  }


  onPublisherButtonClick() {
    window.location.href = this.product.hoplink;
  }

  onViewAllReviewsClick() {
    this.router.navigate([this.product.urlTitle + '/reviews']);
  }

  onFacebookClick() {
    super.onFacebookClick(location.pathname, '');
  }

  onTwitterClick() {
    super.onTwitterClick(location.pathname, 'Check out what I found at NicheShack.com!')
  }

  onAddToListClick() {
    if (this.onCloseSubscription) {
      this.onCloseSubscription.unsubscribe();
    }

    this.modalService.addToList.show = true;
    this.onCloseSubscription = this.modalService.createList.onClose.subscribe((newList: any) => {
      if (newList.submitted) {
        // Make a post request to the database
        this.modalService.addToList.show = true;
      }

      this.modalService.addToList.show = true;
    });
  }

  trackReview(index: number, review: Review) {
    return review.id;
  }
}