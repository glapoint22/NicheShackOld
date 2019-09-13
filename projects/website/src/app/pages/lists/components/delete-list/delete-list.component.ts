import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from 'projects/website/src/app/shared/dialog-box/dialog-box.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['../../../../shared/dialog-box/dialog-box.component.scss','./delete-list.component.scss']
})
export class DeleteListComponent extends DialogBoxComponent implements OnInit {
  @Input() listId: string;

  constructor(modalService: ModalService, router: Router, private dataService: DataService) {
    super(modalService, router);
  }

  ngOnInit() {
    this.modalServiceObject = this.modalService.deleteList;
    super.ngOnInit();
  }

  onDelete() {
    this.dataService.delete('api/Lists', {
      listId: this.listId
    })
      .subscribe(() => {
        this.close();
        this.router.navigate(['account', 'lists']);
      });
  }
}