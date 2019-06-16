import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public totalProducts: number;
  public products;
  public pages: number;
  public query: string;
  public page: number;
  public pageList: Array<string> = [];
  public categories;
  public filters;
  public showFilters: boolean = false;
  public results;

  public currentCategory;
  public currentNiche;
  public currentQuery;

  //Sort Options
  public selectedSortOption: any;
  public sortOptions = [];

  //Products per page
  public productsPerPage: any;
  public perPageOptions = [];

  // Filters
  private filterString: string;
  private queryParams: any;
  private separator: string = '^'

  public dataComplete = new Subject<void>();


  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, public modalService: ModalService) { }

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
    
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters: Array<any> = [];
      this.query = queryParams.get('query');
      this.filterString = queryParams.get('filter');
      this.queryParams = queryParams;


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

          this.productsPerPage = this.perPageOptions[index == -1 ? 0 : index];

          //Sort
          index = this.sortOptions.findIndex(x => x.value === queryParams.get('sort'));
          this.selectedSortOption = this.sortOptions[index == -1 ? 0 : index];

          //Assign properties and variables
          let body = document.scrollingElement || document.documentElement;
          this.pageList = [];
          this.page = response.page;
          this.products = response.products;
          this.totalProducts = response.totalProducts;
          productStart = this.productsPerPage.value * (this.page - 1) + 1;
          productEnd = productStart + response.products.length - 1;
          this.results = 'Showing ' + productStart.toLocaleString('en') + '-' + productEnd.toLocaleString('en') + ' of ' +
            this.totalProducts.toLocaleString('en');
          this.pages = Math.ceil(this.totalProducts / this.productsPerPage.value);
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

          this.dataComplete.next();

          //Scroll to top
          body.scrollTop = 0;

          //Pages
          this.pageList.push('1');
          if (this.page >= 5 && this.pages > 7) {
            this.pageList.push('...');

            if (this.pages - this.page < 4) {
              for (let i = this.pages - 5; i < this.pages; i++) {
                this.pageList.push(i.toString());
              }
            } else {
              for (let i = this.page - 2; i < Math.min(this.page + 3, this.pages); i++) {
                this.pageList.push(i.toString());
              }
            }
            if (this.pages - this.page > 3) this.pageList.push('...');
          } else {
            for (let i = 2; i <= Math.min(this.pages - 1, 6); i++) {
              this.pageList.push(i.toString());
            }
            if (this.pages > 7) this.pageList.push('...');
          }
          if (this.pages > 1) this.pageList.push(this.pages.toString());
        });
    });
  }

  onArrowClick(direction) {
    this.setPage(this.page + direction);
  }

  onPageClick(page) {
    if (page !== '...') {
      this.setPage(page);
    }
  }

  setPage(page) {
    this.router.navigate(['/search'], {
      queryParams: { 'page': page },
      queryParamsHandling: 'merge'
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

  setFilter(filter: any) {
    let result, startString, midString, endString;

    //If there are any filters
    if (this.filterString) {
      //Search for the filter in the string
      result = this.getFilter(filter.filterName);

      //If the filter was found within the filter string
      if (result) {
        /* Split the filter string into 3 sections. The first two sections are the
        start and end of the filter string. */
        startString = this.filterString.slice(0, result.index) + result[1];
        endString = this.filterString.slice(result.index + result[0].length);

        //Split the results into an array
        let array = result[2].split(this.separator);

        //Test to see if the option is a user defined price range
        if (filter.option.substr(0, 1) === '[') {
          let found = false;

          //Iterate through the array to see if there is an existing price range
          for (let i = 0; i < array.length; i++) {
            //If found...
            if (array[i].substr(0, 1) === '[') {
              //If the passed in price range is different, replace
              if (array[i] != filter.option) {
                array[i] = filter.option;
              } else {
                //Otherwise, remove the price range
                array.splice(i, 1);
              }
              found = true;
              break;
            }
          }
          //Assign to the mid string
          if (found) {
            midString = array.join(this.separator);
          } else {
            midString = result[2] + this.separator + filter.option;
          }

        } else {
          //The option is not a user defined price range
          let index = array.indexOf(filter.option);

          //If the option is not found, add it to the mid string
          if (index == -1) {
            midString = result[2] + this.separator + filter.option;
          } else {
            //The option was found, so remove it from the string
            array.splice(index, 1);
            midString = array.join(this.separator);
          }
        }


        //Combine all three strings together
        this.filterString = startString + midString + endString;

        //If the midstring is empty, this means there are no more options in this filter.
        //Remove this filter from the filter string
        if (midString === '') {
          this.filterString = this.filterString.replace(filter.filterName + '||', '');
        }
      } else {
        //The filter was not found within the filter string so we add it here
        this.filterString += filter.filterName + '|' + filter.option + '|';
      }
    } else {
      //There are no filters in the filter string, so add the first one here
      this.filterString = filter.filterName + '|' + filter.option + '|';
    }


    //Set the query params
    if (this.filterString === '') {
      this.setQueryParameters({ add: [], remove: ['page', 'filter'] });
    } else {
      this.setQueryParameters({ add: [{ name: 'filter', value: this.filterString }], remove: ['page'] });
    }
  }



  setQueryParameters(queryParameters: any) {
    let params = {};

    //Remove the query parameters
    for (let i = 0; i < this.queryParams.keys.length; i++) {
      if (queryParameters.remove.every(x => {
        return x !== this.queryParams.keys[i];
      })) {
        params[this.queryParams.keys[i]] = this.queryParams.params[this.queryParams.keys[i]];
      }
    }

    //Add the query parameters
    for (let i = 0; i < queryParameters.add.length; i++) {
      params[queryParameters.add[i].name] = queryParameters.add[i].value;
    }

    //Update the url
    this.router.navigate(['/search'], {
      queryParams: params
    });
  }

  getFilter(filter: string) {
    let regEx = new RegExp('(' + filter + '\\|)([a-zA-Z0-9`~!@#$%^&*()\-_+={[}\\]\\:;"\'<,>.?/\\s]+)', 'g');
    return regEx.exec(this.filterString);
  }

  getOptionsFromQueryParams(caption: string) {
    let optionsArray = [], filterString = this.queryParams.params['filter'];

    //If there are any filters
    if (filterString) {
      //See if the current filter is in the list
      let filter = this.getFilter(caption);

      //If the current filter is in the list
      if (filter) {
        optionsArray = filter[2].split(this.separator);
      }
    }
    return optionsArray;
  }
}