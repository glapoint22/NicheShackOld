import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'popup-button',
  templateUrl: './popup-button.component.html',
  styleUrls: ['./popup-button.component.scss']
})
export class PopupButtonComponent implements OnInit {
  @Input() title: string;
  @Input() items: Array<any>;
  @Input() onClose: Subject<void>;
  @Input() defaultIndex: number = -1;
  @Input() width: number;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  public showPopup: boolean;
  public onCloseSubscription: Subscription;
  public selectedItemIndex: number;

  constructor() { }

  ngOnInit() {
    this.onCloseSubscription = this.onClose.subscribe(() => {
      this.showPopup = false;
    });
    if (this.defaultIndex != -1) this.selectedItemIndex = this.defaultIndex;
  }
  ngOnDestroy() {
    this.onCloseSubscription.unsubscribe();
  }

  onItemClick(item, index) {
    this.showPopup = false;
    this.selectedItemIndex = index;
    this.onClick.emit(item);
  }
}