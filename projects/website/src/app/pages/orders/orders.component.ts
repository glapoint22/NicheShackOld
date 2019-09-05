import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends Page implements OnInit {
  public event = new Subject<void>();
  public filter: Array<any>;
  public orders: Array<any> = [];
  public selectedFilter: any = {};
  public search: string;
  public products: Array<any> = [];
  public displayType: string;
  public count: number;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { super(titleService, metaService, document) }



  ngOnInit() {
    // Set the page properties
    this.title = 'Your Orders';
    this.share = false;
    super.ngOnInit();

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      let parameters: Array<any> = [];

      this.search = queryParams.get('search');

      // Get all the query params
      for (let i = 0; i < queryParams.keys.length; i++) {
        parameters.push({ key: queryParams.keys[i], value: queryParams.get(queryParams.keys[i]) });
      }

      this.dataService
        .get('api/Products/Orders', parameters)
        .subscribe(response => {
          this.displayType = response.displayType;

          // Display orders
          if (this.displayType == 'order') {
            this.orders = response.orders;
            this.filter = response.filters;
            this.count = this.orders.length;
          } else {
            // Display products
            this.products = response.products;
            this.count = this.products.length;
          }

          // Set the selected filter for the time span of the orders
          if (this.filter) {
            let index = Math.max(0, this.filter.findIndex(x => x.value == queryParams.get('filter')));
            this.selectedFilter = this.filter[index];
          }
        });
    });
  }

  onFilterClick(item) {
    this.selectedFilter = item;
    this.router.navigate([location.pathname], {
      queryParams: { 'filter': this.selectedFilter.value }
    });
  }

  onSearch(search: string) {
    this.router.navigate([location.pathname], {
      queryParams: { 'search': search }
    });
  }

  resetUrl() {
    this.router.navigate([location.pathname], {
      queryParams: {}
    });
  }

  onSearchKeydown(event, search: string) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter' || event.keyCode === 13) {
      this.onSearch(search);
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMousedown() {
    this.event.next();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(keydownEvent) {
    if (keydownEvent.code === 'Escape' || keydownEvent.keyCode === 27) {
      this.event.next();
    }
  }

  getPaymentMethodImg(method: string) {
    if (method == 'PYPL') return 'paypal.png';
    if (method == 'VISA') return 'visa.png';
    if (method == 'MSTR') return 'master_card.png';
    if (method == 'DISC') return 'discover.png';
    if (method == 'AMEX') return 'amex.png';
    if (method == 'SOLO') return 'solo.png';
    if (method == 'DNRS') return 'diners_club.png';
    if (method == 'MAES') return 'maestro.png';
  }

  getPaymentMethodTitle(method: string) {
    if (method == 'PYPL') return 'Paypal';
    if (method == 'VISA') return 'Visa';
    if (method == 'MSTR') return 'Mastercard';
    if (method == 'DISC') return 'Discover';
    if (method == 'AMEX') return 'American Express';
    if (method == 'SOLO') return 'Solo';
    if (method == 'DNRS') return 'Diners Club';
    if (method == 'MAES') return 'Maestro';
  }

  getDefaultIndex() {
    if (this.filter) return this.filter.findIndex(x => x == this.selectedFilter);
    return {};

  }

  onWriteReviewClick(productId: string) {
    this.router.navigate(['/reviews/write-review'], { queryParams: { 'id': productId } });
  }

  onPublisherButtonClick(hoplink) {
    window.location.href = hoplink;
  }
}