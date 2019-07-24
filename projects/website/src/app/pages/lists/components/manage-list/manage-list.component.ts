import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from "../../../../shared/dialog-box/dialog-box.component";

@Component({
  selector: 'manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['../../../../shared/dialog-box/dialog-box.component.scss', './manage-list.component.scss']
})
export class ManageListComponent extends DialogBoxComponent implements OnInit {
  @Input() listName: string;
  @Input() description: string;


  ngOnInit() {
    this.modalServiceObject = this.modalService.manageList;
    super.ngOnInit();
  }
}