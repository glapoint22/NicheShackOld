import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsSlider } from '../../shared/products-slider/products-slider';
import { QueryParametersService } from '../../query-parameters.service';
import { SharePage } from '../share-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
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

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private route: ActivatedRoute,
    public modalService: ModalService,
    private router: Router,
    private queryParametersService: QueryParametersService,
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object) { super(titleService, metaService, document) }


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      //Scroll to top
      let body = document.scrollingElement || document.documentElement;
      body.scrollTop = 0;
    }

    this.dataService
      .get('api/Products/Detailed', [{ key: 'urlTitle', value: this.route.snapshot.params['product'] }])
      .subscribe(productDetails => {
        this.product = productDetails.product;
        this.content = productDetails.content;
        this.pricePoints = productDetails.pricePoints;
        this.media = productDetails.media;

        this.title = this.product.title;
        this.description = this.product.description;
        this.image = '/Images/' + this.product.shareImage;
        this.getReviews(this.route.snapshot.queryParams['sort']);
        super.ngOnInit();
      });


    this.productsSlider = null;

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.queryParametersService.queryParams = queryParams;
      if (this.product.id) {
        this.getReviews(queryParams.get('sort'));
      }
    });
  }

  getReviews(sort: string) {
    this.dataService
      .get('api/ProductReviews', [{ key: 'productId', value: this.product.id }, { key: 'orderBy', value: sort }])
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
    this.router.navigate(['/reviews/' + this.product.urlTitle]);
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
      if (newList.listName) {
        // Make a post request to the database
        this.modalService.addToList.show = true;
      }

      this.modalService.addToList.show = true;
    });
  }
}