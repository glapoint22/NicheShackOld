import { Component, Input } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'category-filter',
  templateUrl: '../filter/filter.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CategoryFilterComponent extends FilterComponent {
  @Input() categories;
  @Input() currentCategory;
  @Input() currentNiche;
  @Input() query;

  getProductCount(category) {
    return category.niches.map(a => a.productCount).reduce((a, b) => a + b);
  }
}