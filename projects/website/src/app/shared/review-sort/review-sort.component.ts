import { Component, OnInit, Input } from '@angular/core';
import { QueryParametersService } from '../../query-parameters.service';

@Component({
  selector: 'review-sort',
  templateUrl: './review-sort.component.html',
  styleUrls: ['./review-sort.component.scss']
})
export class ReviewSortComponent implements OnInit {
  @Input() url: string;
  public sortOptions: Array<any>;
  public selectedSortOption: any = {};

  constructor(private queryParametersService: QueryParametersService) { }

  ngOnInit() {
    this.sortOptions = [
      {
        name: 'High to Low Rating',
        value: 'high-low-rating'
      },
      {
        name: 'Low to High Rating',
        value: 'low-high-rating'
      },
      {
        name: 'Newest to Oldest',
        value: 'new-old'
      },
      {
        name: 'Oldest to Newest',
        value: 'old-new'
      },
      {
        name: 'Most helpful',
        value: 'most-helpful'
      }
      
    ];

    let index = Math.max(0, this.sortOptions.findIndex(x => x.value == this.queryParametersService.queryParams.get('sort')));

    this.selectedSortOption = this.sortOptions[index];
  }

  setSort() {
    this.queryParametersService.updateUrl(this.url, { add: [{ name: 'sort', value: this.selectedSortOption.value }], remove: ['page'] });
  }
}