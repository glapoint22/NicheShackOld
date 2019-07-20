import { Component, OnInit, HostListener, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { DisplayProduct } from '../../shared/product/display-product';
import { QueryParametersService } from '../../query-parameters.service';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { Filter } from './components/filter/filter';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends Page implements OnInit, AfterViewInit {
  public totalProducts: number;
  public products: Array<DisplayProduct>;
  public pageCount: number;
  public query: string;
  public currentPage: number;
  public categories;
  public filters: Array<Filter>;
  public showFilters: boolean = false;
  public results: string;

  public currentCategory;
  public currentNiche;
  public currentQuery;

  //Sort Options
  public selectedSortOption: any;
  public sortOptions = [];

  //Products per page
  public productsPerPage: any;
  public perPageOptions = [];

  @ViewChild(PriceFilterComponent, { static: false }) priceFilter: PriceFilterComponent;


  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private dataService: DataService,
    private route: ActivatedRoute,
    public modalService: ModalService,
    private queryParametersService: QueryParametersService,
    @Inject(PLATFORM_ID) private platformId: Object) { super(titleService, metaService, document) }

  ngAfterViewInit() {
    // set the custom price range when the price filter component is defined
    if (isPlatformBrowser(this.platformId)) {
      let interval = window.setInterval(() => {
        if (this.priceFilter) {
          this.priceFilter.setCustomPriceRange();
          window.clearInterval(interval);
        }
      }, 1);
    }
  }

  ngOnInit() {
    //Set the sort options
    this.sortOptions = [
      {
        name: 'Price: Low to High',
        value: 'price-asc'
      },
      {
        name: 'Price: High to Low',
        value: 'price-desc'
      }
    ];

    this.perPageOptions = [
      {
        name: '24',
        value: 24
      },
      {
        name: '48',
        value: 48
      },
      {
        name: '72',
        value: 72
      },
      {
        name: '96',
        value: 96
      },
    ];

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {

      let parameters: Array<any> = [];
      this.query = queryParams.get('query');
      this.queryParametersService.queryParams = queryParams;


      if (this.query && this.sortOptions[0].name !== 'Relevance') {
        this.sortOptions.unshift({
          name: 'Relevance',
          value: 'relevance'
        });
      } else if (!this.query && this.sortOptions[0].name === 'Relevance') {
        this.sortOptions.shift();
        this.selectedSortOption = this.sortOptions[0];
      }

      //Set the parameters array from the query params
      for (let i = 0; i < queryParams.keys.length; i++) {
        parameters.push({ key: queryParams.keys[i], value: queryParams.get(queryParams.keys[i]) });
      }

      //Set the default sort option if not part of the query params
      if (parameters.findIndex(x => x.key === 'sort') === -1) {
        parameters.push({ key: 'sort', value: this.sortOptions[0].value });
      }

      //Set the default per page option if not part of the query params
      if (parameters.findIndex(x => x.key === 'limit') === -1) {
        parameters.push({ key: 'limit', value: this.perPageOptions[0].value });
      }

      //Get the products
      this.dataService.get('api/Products', parameters)
        .subscribe((response: any) => {
          //Products per page
          let perPage = Number(queryParams.get('limit'));
          let productStart: number;
          let productEnd: number;
          let index = this.perPageOptions.findIndex(x => x.value === perPage);

          //Scroll to top
          if (isPlatformBrowser(this.platformId)) {
            let body = document.scrollingElement || document.documentElement;
            body.scrollTop = 0;
          }


          // Products per page
          this.productsPerPage = this.perPageOptions[index == -1 ? 0 : index];

          //Sort
          index = this.sortOptions.findIndex(x => x.value === queryParams.get('sort'));
          this.selectedSortOption = this.sortOptions[index == -1 ? 0 : index];

          //Assign properties
          this.currentPage = response.page;
          this.products = response.products;
          this.totalProducts = response.totalProducts;
          productStart = this.productsPerPage.value * (this.currentPage - 1) + 1;
          productEnd = productStart + response.products.length - 1;
          this.results = 'Showing ' + productStart.toLocaleString('en') + '-' + productEnd.toLocaleString('en') + ' of ' +
            this.totalProducts.toLocaleString('en');
          this.pageCount = Math.ceil(this.totalProducts / this.productsPerPage.value);
          this.categories = response.categories;
          this.filters = response.filters;

          //Set the properties
          this.currentCategory = queryParams.get('category');
          this.currentNiche = queryParams.get('nicheId');
          this.currentQuery = queryParams.get('query');

          //Set categories to not show all niches
          for (let i = 0; i < this.categories.length; i++) {
            this.categories[i]['showAllNiches'] = false;
          }

          // Set the price filter's custom price range
          if (this.priceFilter) this.priceFilter.setCustomPriceRange();

          
          // Set the title and description for this page
          this.title = this.query ? this.query : '';
          this.description = 'Search for items in your niche';

          if (this.categories.length > 0) {
            if(this.query && this.currentCategory != null){
              this.title += ': '
            }

            this.title += (this.currentCategory != null ? this.categories[0].name : '');
            this.description += (this.currentCategory != null ? ' in ' + this.categories[0].name : '') + '.';
          } else {
            this.description += '.';
          }

          this.share = false;
          super.ngOnInit();
        });
    });
  }

  trackProduct(index: number, product: any) {
    return product.id;
  }

  trackFilter(index: number, filter: any) {
    return filter.caption;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 970) this.showFilters = false;
  }
}