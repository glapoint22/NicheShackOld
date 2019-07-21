import { Component, Input } from '@angular/core';
import { QueryParametersService } from 'projects/website/src/app/query-parameters.service';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';

@Component({
  selector: 'category-filter-content',
  templateUrl: './category-filter-content.component.html',
  styleUrls: ['../filter/filter.component.scss', '../category-filter/category-filter.component.scss']
})
export class CategoryFilterContentComponent {
  @Input() categoryFilter: CategoryFilterComponent;
  public maxCount = 4;
  public showAllCategories: boolean;
  public allCategoriesVisible: boolean;
  public seeMoreCategories: boolean;
  public lineHeight: number = 18;
  public margin: number = 10;

  constructor(private queryParametersService: QueryParametersService) {  }

  onClick(addRemoveParams) {
    this.queryParametersService.updateUrl('/search', addRemoveParams);
  }

  getMaxHeight(category) {
    // Calculate all niches + See Less + category title
    if (category.showAllNiches) return (category.niches.length + 2) * this.lineHeight + this.getMargin();

    // Calculate number of niches less or equal to max count + category title
    if (category.niches.length <= this.maxCount) return (category.niches.length + 1) * this.lineHeight + this.getMargin();

    // Calculate max count of niches, category title, and see more
    return 6 * this.lineHeight + this.getMargin();
  }

  getMargin() {
    return this.categoryFilter.currentCategory == -1 || this.categoryFilter.query == undefined ? this.margin : 0;
  }

  showHideNiches(category) {
    category.seeMore = !category.seeMore;

    if (!category.showAllNiches) {
      category.showAllNiches = true;
      window.setTimeout(() => {
        category.niches.forEach((niche, index) => {
          if (index >= this.maxCount) {
            niche.isVisible = true;
          }
        });
      }, 1);
    } else {
      category.niches.forEach((niche, index) => {
        if (index >= this.maxCount) {
          niche.isVisible = false;
        }
      });
    }
  }

  showHideCategories() {
    this.seeMoreCategories = !this.seeMoreCategories;

    if (!this.showAllCategories) {
      this.showAllCategories = true;
      window.setTimeout(() => {
        this.allCategoriesVisible = true;
      }, 1);
    } else {
      this.allCategoriesVisible = false;
    }
  }

  onCategoryTransitionEnd() {
    if (!this.categoryFilter.showContent && this.categoryFilter.show) {
      this.categoryFilter.show = false;
    }

    if (!this.allCategoriesVisible) {
      this.showAllCategories = false;
    }
  }
}