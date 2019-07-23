import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from "../../../../shared/dialog-box/dialog-box.component";

@Component({
  selector: 'manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['../../../../shared/dialog-box/dialog-box.component.scss', './manage-list.component.scss']
})
export class ManageListComponent extends DialogBoxComponent implements OnInit {
  public listName: string = 'Christmas List';
  public description: string = 'This is the best list in the whole entire world! It is so good that Santa himself can\'t beleiv it is that fucking good!' ;

  ngOnInit() {
    this.modalServiceObject = this.modalService.manageList;
    super.ngOnInit();
  }

}
