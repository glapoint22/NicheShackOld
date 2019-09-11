import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from "../../../../shared/dialog-box/dialog-box.component";
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'manage-collaborators',
  templateUrl: './manage-collaborators.component.html',
  styleUrls: ['../../../../shared/dialog-box/dialog-box.component.scss', './manage-collaborators.component.scss']
})
export class ManageCollaboratorsComponent extends DialogBoxComponent implements OnInit {
  @Input() collaborators: Array<any>;
  @Input() listId: string;
  public collaboratorIndex;


  constructor(modalService: ModalService, router: Router, private dataService: DataService) {
    super(modalService, router);
  }

  ngOnInit() {
    this.modalServiceObject = this.modalService.manageCollaborators;
    super.ngOnInit();
  }

  scrollTo() {
    let interval = window.setInterval(() => {
      let elmnt = document.getElementById("prompt");
      if (elmnt) {
        elmnt.scrollIntoView(false);
        window.clearInterval(interval);
      }
    }, 1);
  }

  onRemoveCollaborator() {
    // Update database!
    this.dataService.delete('api/Lists/Collaborator', {
      collaboratorId: this.collaborators[this.collaboratorIndex].customerId,
      listId: this.listId
    })
      .subscribe(() => {
        this.collaborators.splice(this.collaboratorIndex, 1);
        this.collaboratorIndex = undefined;
        if (this.collaborators.length == 0) this.close();
      });

  }
}