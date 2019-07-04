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
    if(this.modalService.createList.showAddToList) this.modalService.addToList.show = true;
    super.close();
  }

  onSubmit() {
    // Do stuff
    super.onSubmit();
  }
}