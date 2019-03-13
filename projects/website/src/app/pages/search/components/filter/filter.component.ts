import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() caption: string;
  public showContent: boolean;
  public show: boolean;

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
  }

  onArrowClick() {
    if (!this.show) {
      this.show = true;
      window.setTimeout(() => {
        this.showContent = true;
      }, 1);
    } else {
      this.showContent = false;
    }
  }

  onTransitionEnd() {
    if (!this.showContent) this.show = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    window.setTimeout(() => {
      if (event.target.innerWidth > 970) {
        this.show = true;
        this.showContent = true;
      } else {
        this.show = false;
        this.showContent = false;
      }
    }, 1)
  }
}