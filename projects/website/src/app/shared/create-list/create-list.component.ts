import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['../../shared/dialog-box/dialog-box.component.scss']
})
export class CreateListComponent extends DialogBoxComponent implements OnInit {
  public listName: string = '';
  public description: string;

  ngOnInit() {
    this.modalServiceObject = this.modalService.createList;
    super.ngOnInit();
  }

  close() {
    this.modalService.createList.onClose.next({
      listName: this.listName,
      description: this.description
    });
    super.close();
  }

  onSubmit() {
    // Do stuff
    super.onSubmit();
  }
}