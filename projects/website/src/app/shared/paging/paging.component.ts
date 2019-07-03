import { Component, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnChanges {
  public pageList: Array<string> = [];
  @Input() public pageCount: number;
  @Input() public currentPage: number;
  @Input() url: string;

  constructor(private router: Router) { }

  ngOnChanges() {
    this.pageList = [];

    this.pageList.push('1');
    if (this.currentPage >= 5 && this.pageCount > 7) {
      this.pageList.push('...');

      if (this.pageCount - this.currentPage < 4) {
        for (let i = this.pageCount - 5; i < this.pageCount; i++) {
          this.pageList.push(i.toString());
        }
      } else {
        for (let i = this.currentPage - 2; i < Math.min(this.currentPage + 3, this.pageCount); i++) {
          this.pageList.push(i.toString());
        }
      }
      if (this.pageCount - this.currentPage > 3) this.pageList.push('...');
    } else {
      for (let i = 2; i <= Math.min(this.pageCount - 1, 6); i++) {
        this.pageList.push(i.toString());
      }
      if (this.pageCount > 7) this.pageList.push('...');
    }
    if (this.pageCount > 1) this.pageList.push(this.pageCount.toString());
  }

  onArrowClick(direction) {
    this.setPage(this.currentPage + direction);
  }

  onPageClick(page) {
    if (page !== '...') {
      this.setPage(page);
    }
  }

  setPage(page) {
    this.router.navigate([this.url], {
      queryParams: { 'page': page },
      queryParamsHandling: 'merge'
    });
  }
}