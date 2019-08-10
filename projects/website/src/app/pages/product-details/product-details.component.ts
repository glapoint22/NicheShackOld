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

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent extends SharePage implements OnInit {
  public product: Product;
  public productsSlider: Array<ProductsSlider>;
  private onCloseSubscription: Subscription;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private route: ActivatedRoute,
    public modalService: ModalService,
    private router: Router,
    private queryParametersService: QueryParametersService,
    private dataService: DataService) { super(titleService, metaService, document) }


  ngOnInit() {
    this.dataService
      .get('api/ProductDetails', [{ key: 'urlTitle', value: this.route.snapshot.params['product'] }])
      .subscribe(product => {
        this.product = product;
        this.title = this.product.title;
        this.description = this.product.description;
        this.image = '/Images/' + this.product.shareImage;
        super.ngOnInit();
      });




    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      //Scroll to top
      // let body = document.scrollingElement || document.documentElement;
      // body.scrollTop = 0;

      this.queryParametersService.queryParams = queryParams;



      this.productsSlider = null;
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