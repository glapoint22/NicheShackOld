import { Component, Input, OnChanges } from '@angular/core';
import { QueryParametersService } from '../../query-parameters.service';

@Component({
  selector: 'review-sort',
  templateUrl: './review-sort.component.html',
  styleUrls: ['./review-sort.component.scss']
})
export class ReviewSortComponent implements OnChanges {
  @Input() url: string;
  @Input() sortOptions: Array<any> = [];
  public selectedSortOption: any = {};

  constructor(private queryParametersService: QueryParametersService) { }

  ngOnChanges(): void {
    if (this.sortOptions.length > 0) {
      let index = Math.max(0, this.sortOptions.findIndex(x => x.value == this.queryParametersService.queryParams.get('sort')));
      this.selectedSortOption = this.sortOptions[index];
    }
  }

  setSort() {
    this.queryParametersService.updateUrl(this.url, { add: [{ name: 'sort', value: this.selectedSortOption.value }], remove: ['page'] });
  }
}