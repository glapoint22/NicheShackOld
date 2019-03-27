import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() caption: string;
  @Input() showContent: boolean;
  @Input() show: boolean;

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
}