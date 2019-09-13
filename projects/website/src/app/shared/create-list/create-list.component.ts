import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['../../shared/dialog-box/dialog-box.component.scss']
})
export class CreateListComponent extends DialogBoxComponent implements OnInit {
  public name: string;
  public description: string;
  private listId: string;

  constructor(modalService: ModalService, router: Router, private dataService: DataService) {
    super(modalService, router);
  }

  ngOnInit() {
    this.modalServiceObject = this.modalService.createList;
    super.ngOnInit();
  }

  close() {
    this.modalService.createList.onClose.next({
      submitted: this.submitted,
      listId: this.listId
    });
    super.close();
  }

  onSubmit() {
    this.dataService.post('api/Lists', {
      name: this.name,
      description: this.description
    })
      .subscribe(response => {
        this.listId = response.listId;
        super.onSubmit();
        this.close();
      })

  }
}