import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'review-sort',
  templateUrl: './review-sort.component.html',
  styleUrls: ['./review-sort.component.scss']
})
export class ReviewSortComponent implements OnInit {
  @Input() url: string;
  public sortOptions: Array<any>;
  public selectedSortOption: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.sortOptions = [
      {
        name: 'Most helpful',
        value: 'most-helpful'
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
        name: 'Hight to Low Rating',
        value: 'high-low-rating'
      },
      {
        name: 'Low to High Rating',
        value: 'low-high-rating'
      }
    ];

    this.selectedSortOption = this.sortOptions[0];
  }

  setSort() {
    this.router.navigate([this.url], {
      queryParams: { 'sort': this.selectedSortOption.value },
      queryParamsHandling: 'merge'
    });
  }
}