import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from "../../../../shared/dialog-box/dialog-box.component";
import { DataService } from 'src/app/services/data/data.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['../../../../shared/dialog-box/dialog-box.component.scss', './manage-list.component.scss']
})
export class ManageListComponent extends DialogBoxComponent implements OnInit {
  @Input() list: any;
  public promptDelete: boolean;
  public name: string;
  public description: string;

  constructor(modalService: ModalService, router: Router, private dataService: DataService) {
    super(modalService, router);
  }


  ngOnInit() {
    this.modalServiceObject = this.modalService.manageList;
    super.ngOnInit();

    this.name = this.list.name;
    this.description = this.list.description;
  }

  onSave() {
    // Update database
    this.dataService.put('api/Lists', {
      id: this.list.id,
      name: this.name,
      description: this.description
    })
      .subscribe((list: any) => {
        this.list.name = list.name;
        this.list.description = list.description;
        this.modalService.manageList.show = false;
      });
  }
}