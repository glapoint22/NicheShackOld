import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogBoxComponent } from '../../../shared/dialog-box/dialog-box.component';

@Component({
  selector: 'share-list',
  templateUrl: './share-list.component.html',
  styleUrls: ['../../../shared/dialog-box/dialog-box.component.scss', './share-list.component.scss']
})
export class ShareListComponent extends DialogBoxComponent implements OnInit {
  public viewEdit: boolean;
  public viewOnly: boolean;
  public viewEditLinkCopied: boolean;
  public viewOnlyLinkCopied: boolean;
  @Output() onShareClick = new EventEmitter<any>();

  ngOnInit() {
    this.modalServiceObject = this.modalService.shareList;
    super.ngOnInit();
  }

  onClick(action: string, type: string) {
    this.onShareClick.emit({
      action: action,
      type: type
    });
  }
}
