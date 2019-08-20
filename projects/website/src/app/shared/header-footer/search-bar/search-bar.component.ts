import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public query: string;
  public categories: Array<any> = [];
  public searchCategories: Array<any> = []
  public selectedCategory: any = {};
  public searchSuggestions: Array<string> = [];
  public searchSuggestionIndex: number = -1;
  private queryParams: any;
  private searchWord: string;
  public suggestionClicked: boolean;
  @ViewChild('tmpSelect', { static: true }) tmpSelect: ElementRef;
  @ViewChild('select', { static: true }) select: ElementRef;
  @ViewChild('search', { static: true }) search: ElementRef;


  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) this.setSelectElementWidth();
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.queryParams = queryParams;
      if (this.categories.length > 0) {
        this.setSelectedCategory();
        this.setSelectElementWidth();
      }
    });

    if (this.dataService.categories.length === 0) {
      this.dataService.get('api/SearchBar')
        .subscribe((response: any) => {
          this.categories = this.dataService.categories = response;
          this.setCategories();
        });
    } else {
      this.categories = this.dataService.categories;
      this.setCategories();
    }
  }

  getQuery() {
    if (this.route.snapshot.queryParams.query) {
      return this.route.snapshot.queryParams['query'];
    }
    return '';
  }

  setCategories() {
    this.searchCategories = this.categories.slice().map(x => ({ id: x.id, name: x.name }));
    this.searchCategories.unshift({ name: 'All', id: -1 });

    this.setSelectedCategory();
  }

  setSelectedCategory() {
    let category;
    let id;

    category = this.queryParams.get('categoryId');


    if (!category) {
      id = 0;
    } else {
      id = this.searchCategories.findIndex(x => x.id == Number(category));
    }
    this.selectedCategory = this.searchCategories[id];
  }


  setQuery(query: string) {
    if (query !== '') {
      this.searchSuggestions = [];
      this.router.navigate(['/search'], { queryParams: this.selectedCategory.id > -1 ? { 'query': query, 'categoryId': this.selectedCategory.id } : { 'query': query } });
    }
  }
  onImageClick() {
    this.router.navigate(['/']);
  }

  setSelectElementWidth() {
    let interval = window.setInterval(() => {
      if (this.select.nativeElement.offsetWidth !== this.tmpSelect.nativeElement.offsetWidth) {
        this.select.nativeElement.style.width = this.tmpSelect.nativeElement.offsetWidth + 'px';
      }
      if (this.select.nativeElement.offsetWidth == this.tmpSelect.nativeElement.offsetWidth) {
        clearInterval(interval);
      }
    }, 1);
  }

  onSearchKeydown(event, query) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter' || event.keyCode === 13 ||
      event.code === 'ArrowUp' || event.keyCode === 38 || event.code === 'ArrowDown' ||
      event.keyCode === 40 || event.code === 'Escape' || event.keyCode === '27') {

      // Enter
      if (event.code === 'NumpadEnter' || event.code === 'Enter' || event.keyCode === 13) {
        this.setQuery(query);
        return;
      }

      // Arrow up
      if (event.code === 'ArrowUp' || event.keyCode === 38) {
        this.searchSuggestionIndex--;
        if (this.searchSuggestionIndex < -1) this.searchSuggestionIndex = this.searchSuggestions.length - 1;
      }

      // Arrow down
      if (event.code === 'ArrowDown' || event.keyCode === 40) {
        this.searchSuggestionIndex++;
        if (this.searchSuggestionIndex > this.searchSuggestions.length - 1) this.searchSuggestionIndex = -1;
      }

      // Display suggestion in search input
      if (this.searchSuggestionIndex > -1 && this.searchSuggestionIndex < this.searchSuggestions.length) {
        this.search.nativeElement.value = this.searchSuggestions[this.searchSuggestionIndex]
      } else {
        this.search.nativeElement.value = this.searchWord;
      }


      // Escape
      if (event.code === 'Escape' || event.keyCode === '27') this.searchSuggestions = [];
    } else {
      this.searchSuggestionIndex = -1;

      // !!REMOVE setTimeout AND REPLACE WITH CALL TO DATABASE!!
      window.setTimeout(() => {
        this.searchSuggestions = [
          'food',
          'food scale',
          'food Processor',
          'foot massager',
          'foot peel',
          'foot scrubber',
          'food coloring',
          'foot file',
          'foot spa',
          'football'
        ]
        this.searchWord = this.search.nativeElement.value;
      }, 1);
    }
  }

  getPlaceHolder() {
    if (this.selectedCategory.id == -1) return 'Search';
    return 'Search in ' + this.selectedCategory.name;
  }

  onInputBlur() {
    window.setTimeout(() => {
      if (!this.suggestionClicked) {
        this.searchSuggestions = [];
      } else {
        this.suggestionClicked = false;
      }
    }, 1);
  }
}