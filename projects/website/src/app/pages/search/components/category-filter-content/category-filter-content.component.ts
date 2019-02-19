import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'category-filter-content',
  templateUrl: './category-filter-content.component.html',
  styleUrls: ['../filter/filter.component.scss', '../category-filter/category-filter.component.scss']
})
export class CategoryFilterContentComponent {
  @Input() parent: any = {};
  @Output() onCategoryClick = new EventEmitter<any>();
  public maxCount = 4;
  public showAllCategories: boolean;
  public allCategoriesVisible: boolean;
  public seeMoreCategories: boolean;
  public lineHeight: number = 18;
  public margin: number = 10;

  onClick(queryParams) {
    this.onCategoryClick.emit(queryParams);
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
    return this.parent.currentCategory == 0 || this.parent.query == undefined ? this.margin : 0;
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
    if (!this.parent.showContent && this.parent.show) {
      this.parent.show = false;
    }

    if (!this.allCategoriesVisible) {
      this.showAllCategories = false;
    }
  }
}