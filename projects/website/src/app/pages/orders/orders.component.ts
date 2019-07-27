import { Component, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public event = new Subject<void>();
  public origin: number = 2019;
  public filter: Array<any>;

  public orders = [
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

  public selectedFilter;

  constructor() { }

  ngOnInit() {
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

    let currentYear = new Date().getFullYear();
    do {
      this.filter.push({
        name: currentYear.toString(),
        value: 'year-' + currentYear
      });
      currentYear--;
    }
    while (currentYear >= this.origin)


    this.selectedFilter = this.filter[1];

  }

  onFilterClick(item) {
    this.selectedFilter = item;
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

  getDefaultIndex(){
    return this.filter.findIndex(x => x == this.selectedFilter);
  }

}
