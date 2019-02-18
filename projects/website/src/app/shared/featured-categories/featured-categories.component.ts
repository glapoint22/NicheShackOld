import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent {
  @Input() categories: any;
  public featuredCategories: any;

  constructor(private router: Router) { }

  ngOnChanges(){
    this.featuredCategories = this.categories.slice().filter(x => x.featured);
  }

  onClick(category: number) {
    this.router.navigate(['/search'], { queryParams: { 'category': category } });
  }
}
