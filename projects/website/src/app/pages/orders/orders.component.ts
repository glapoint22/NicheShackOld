import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends Page implements OnInit {
  public event = new Subject<void>();
  public origin: number = 2019;
  public filter: Array<any>;
  public orders: Array<any>;
  public selectedFilter;
  public search: string;
  public searchResults: Array<any>;
  public displayType: string;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private router: Router,
    private route: ActivatedRoute
  ) { super(titleService, metaService, document) }



  ngOnInit() {
    // Set the filter options
    this.filter = [
      {
        name: 'Last 30 days',
        value: 'last30'
      },
      {
        name: 'Past 6 months',
        value: '6-months'
      }
    ]

    // Add the years to the filter options
    let currentYear = new Date().getFullYear();
    do {
      this.filter.push({
        name: currentYear.toString(),
        value: 'year-' + currentYear
      });
      currentYear--;
    }
    while (currentYear >= this.origin)

    // Select the default filter
    this.selectedFilter = this.filter[1];

    // Set the page properties
    this.title = 'Your Orders';
    this.share = false;
    super.ngOnInit();

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.search = queryParams.get('search');

      // Orders
      this.orders = [
        {
          date: 'May 22, 2019',
          orderNumber: 'CWOGBZLN',
          mainProduct: {
            id: 'FRT6YHJE4J',
            hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
            urlTitle: 'fat-loss-activation'
          },
          products: [
            {
              title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
              type: 'Physical product',
              quantity: 2,
              price: 4.95,
              image: 'e9a794bc40f14f709e6636aefbfe5d43.png'
            },
            {
              title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
              type: 'Physical product',
              quantity: 2,
              price: 4.95,
              image: null
            },
            {
              title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
              type: 'Physical product',
              quantity: 2,
              price: 4.95,
              image: null
            }
          ],
          paymentMethod: 'MAES',
          subtotal: 65.04,
          shippingHandling: 5,
          discount: -2,
          tax: 1.07,
          total: 69.11
        },
        {
          date: 'May 22, 2019',
          orderNumber: 'CWOGBZLN',
          products: [
            {
              title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
              type: 'Physical product',
              quantity: 2,
              price: 4.95,
              image: 'e9a794bc40f14f709e6636aefbfe5d43.png'
            },
            {
              title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
              type: 'Physical product',
              quantity: 2,
              price: 4.95,
              image: null
            },
            {
              title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
              type: 'Physical product',
              quantity: 2,
              price: 4.95,
              image: null
            }
          ],
          paymentMethod: 'MAES',
          subtotal: 65.04,
          shippingHandling: 5,
          discount: -2,
          tax: 1.07,
          total: 69.11
        }
      ]

      // Search results
      this.searchResults = [
        {
          date: 'May 22, 2019',
          title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
          image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
          hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
          orderNumber: 'CWOGBZLN',
          numItems: 4
        },
        {
          date: 'May 22, 2019',
          title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
          image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
          hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
          orderNumber: 'CWOGBZLN',
          numItems: 4
        },{
          date: 'May 22, 2019',
          title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
          image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
          hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
          orderNumber: 'CWOGBZLN',
          numItems: 4
        },{
          date: 'May 22, 2019',
          title: 'The 2 Week Diet Audiobook Companion (Listen On Any Device!)',
          image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
          hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
          orderNumber: 'CWOGBZLN',
          numItems: 4
        }
      ];

      // This will be determined by the server - "product" or "order"
      this.displayType = 'order'; 

    });
  }

  onFilterClick(item) {
    this.selectedFilter = item;
    this.router.navigate([location.pathname], {
      queryParams: { 'orderFilter': this.selectedFilter.value }
    });
  }

  onSearch(search: string){
    this.router.navigate([location.pathname], {
      queryParams: { 'search': search }
    });
  }
  
  resetUrl(){
    this.router.navigate([location.pathname], {
      queryParams: { }
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
    return this.filter.findIndex(x => x == this.selectedFilter);
  }

  onWriteReviewClick(productId: string) {
    this.router.navigate(['/reviews/write-review'], { queryParams: { 'id': productId } });
  }

  onPublisherButtonClick(hoplink) {
    window.location.href = hoplink;
  }

}
