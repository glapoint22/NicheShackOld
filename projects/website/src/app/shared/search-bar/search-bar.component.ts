import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public query: string;
  public logo: string;
  public categories: Array<any> = [];
  public searchCategories: Array<any> = []
  public selectedCategory: any = {};

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    this.route.queryParamMap.subscribe(queryParams => {
      //Get the search words from the url
      this.query = queryParams.get('query');

      //Get the category from the url
      if (this.categories.length > 0) {
        let id = this.searchCategories.findIndex(x => x.id == Number(queryParams.get('category')));
        this.selectedCategory = this.searchCategories[id];
      }
    });

    this.dataService.get('api/Categories')
      .subscribe((response: any) => {
        this.categories = response;
        this.searchCategories = this.categories.slice().map(x => ({ id: x.id, name: x.name }));
        this.searchCategories.unshift({ name: 'All', id: 0 });
        this.selectedCategory = this.searchCategories[0];
      });
  }

  onSearchButtonClick(query, category) {
    if (query !== '') {
      this.router.navigate(['/search'], { queryParams: { 'query': query, 'category': category } });
    }
  }
  onImageClick() {
    this.router.navigate(['/']);
  }

  onEmailClick() {
    this.router.navigate(['/preferences']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 600) {
      this.logo = 'Logo.png';
    } else {
      this.logo = 'Shack.png';
    }
  }
}