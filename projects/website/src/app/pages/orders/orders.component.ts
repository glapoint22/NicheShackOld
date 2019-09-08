import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

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
      // Parameters we will pass to the server
      let parameters: Array<any> = [];

      // The search words for searching orders
      this.search = queryParams.get('search');
      if (this.searchInput) this.searchInput.nativeElement.value = this.search;

      // Get all the query params from the url and assign it to the parameters array
      for (let i = 0; i < queryParams.keys.length; i++) {
        parameters.push({ key: queryParams.keys[i], value: queryParams.get(queryParams.keys[i]) });
      }

      // Get orders or products from the database
      this.dataService
        .get('api/Orders', parameters)
        .subscribe(response => {
          // Display type will be either "order" or "Product"
          // This is based on what is searched in the search input box
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

          // Set the time span filter based on the selected filter (ex. "Last 30 days")
          if (this.filter) {
            let index = Math.max(0, this.filter.findIndex(x => x.value == queryParams.get('filter')));
            this.selectedFilter = this.filter[index];
          }
        });
    });
  }

  onFilterClick(item) {
    // A new time span has been selected. (ex. "Last 30 days")
    this.selectedFilter = item;

    // Get orders based on the time span
    this.router.navigate([location.pathname], {
      queryParams: { 'filter': this.selectedFilter.value }
    });
  }

  onSearch(search: string) {
    // Get orders or products based on the search words
    this.router.navigate([location.pathname], {
      queryParams: { 'search': search }
    });
  }

  resetUrl() {
    // This will remove all query params from the url
    this.router.navigate([location.pathname], {
      queryParams: {}
    });
    this.searchInput.nativeElement.value = '';
  }

  onSearchKeydown(event, search: string) {
    // See if user pressed the enter key in the search input box
    if (event.code === 'NumpadEnter' || event.code === 'Enter' || event.keyCode === 13) {
      this.onSearch(search);
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMousedown() {
    // When a mousedown event happens
    // This is used to remove the dropdown from the popup button
    this.event.next();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(keydownEvent) {
    // When the esc key is pressed
    // This is used to remove the dropdown from the popup button
    if (keydownEvent.code === 'Escape' || keydownEvent.keyCode === 27) {
      this.event.next();
    }
  }

  getDefaultIndex() {
    // Used to display the defulat selection in the popup button
    if (this.filter) return this.filter.findIndex(x => x == this.selectedFilter);
    return {};
  }

  onWriteReviewClick(productUrlTitle: string) {
    // Navigate to the write review page
    this.router.navigate([productUrlTitle + '/reviews/write-review']);
  }

  onPublisherButtonClick(hoplink) {
    // Navigate to the product page
    window.location.href = hoplink;
  }
}