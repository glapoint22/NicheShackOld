import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from 'projects/website/src/app/shared/dialog-box/dialog-box.component';

@Component({
  selector: 'add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['../../../../shared/dialog-box/dialog-box.component.scss', './add-to-list.component.scss']
})
export class AddToListComponent extends DialogBoxComponent implements OnInit {
  @Input() product: any;
  public lists: Array<any>;
  public selectedList: any = {};

  ngOnInit() {
    this.modalServiceObject = this.modalService.addToList;
    super.ngOnInit();

    this.lists = [
      {
        name: 'Favorites',
        id: 'QOGTUMWTSG'
      },
      {
        name: 'Shopping',
        id: 'KEOFUJWJCE'
      }
    ]

    // Add this at the beginning of the list
    this.lists.unshift({
      name: 'Select your list',
      id: ''
    });

    this.selectedList = this.lists[0];
  }

  createList() {
    this.modalService.addToList.show = false;
    this.modalService.createList.show = true;
    this.modalService.createList.addToListOpen = true;
    this.close();
  }

  onSubmit() {
    // Do stuff
    super.onSubmit();
  }
}
