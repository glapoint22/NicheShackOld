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
  private queryParams: any;
  @ViewChild('tmpSelect', { static: true }) tmpSelect: ElementRef;
  @ViewChild('select', { static: true }) select: ElementRef;


  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    this.setSelectElementWidth();
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      //Get params from the url
      this.query = queryParams.get('query');
      this.queryParams = queryParams;

      // Get the selected category
      if (this.categories.length > 0) {
        this.selectedCategory = this.getSelectedCategory();
      }
    });

    if (this.dataService.categories.length === 0) {
      this.dataService.get('api/Categories')
        .subscribe((response: any) => {
          this.categories = this.dataService.categories = response;
          this.setCategories();
        });
    } else {
      this.categories = this.dataService.categories;
      this.setCategories();
    }


  }

  setCategories() {
    this.searchCategories = this.categories.slice().map(x => ({ id: x.id, name: x.name }));
    this.searchCategories.unshift({ name: 'All', id: -1 });

    // Get the selected category
    this.selectedCategory = this.getSelectedCategory();
  }

  getSelectedCategory() {
    let category = this.queryParams.get('category');
    let id;

    if (!category) {
      id = 0;
    } else {
      id = this.searchCategories.findIndex(x => x.id == Number(category));
    }
    return this.searchCategories[id];
  }


  setQuery(query) {
    if (query !== '') {
      this.router.navigate(['/search'], { queryParams: this.selectedCategory.id > -1 ? { 'query': query, 'category': this.selectedCategory.id } : { 'query': query } });
    }
  }
  onImageClick() {
    this.router.navigate(['/']);
  }

  setSelectElementWidth() {
    if (isPlatformBrowser(this.platformId)) {
      let interval = window.setInterval(() => {
        if (this.select.nativeElement.offsetWidth !== this.tmpSelect.nativeElement.offsetWidth) {
          this.select.nativeElement.style.width = this.tmpSelect.nativeElement.offsetWidth + 'px';
          clearInterval(interval);
        }
      }, 1);
    }

  }

  onSearchKeydown(event, query) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter' || event.keyCode === 13) {
      this.setQuery(query);
    }
  }
}