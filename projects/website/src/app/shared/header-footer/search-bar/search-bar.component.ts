import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

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


  onSearchButtonClick(query, category) {
    if (query !== '') {
      this.router.navigate(['/search'], { queryParams: category > -1 ? { 'query': query, 'category': category } : { 'query': query } });
    }
  }
  onImageClick() {
    this.router.navigate(['/']);
  }
}