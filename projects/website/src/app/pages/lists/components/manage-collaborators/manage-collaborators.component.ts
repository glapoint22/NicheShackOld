import { Component, OnInit, Input } from '@angular/core';
import { DialogBoxComponent } from "../../../../shared/dialog-box/dialog-box.component";

@Component({
  selector: 'manage-collaborators',
  templateUrl: './manage-collaborators.component.html',
  styleUrls: ['../../../../shared/dialog-box/dialog-box.component.scss', './manage-collaborators.component.scss']
})
export class ManageCollaboratorsComponent extends DialogBoxComponent implements OnInit {
  @Input() collaborators: Array<any>;
  public collaboratorIndex;


  ngOnInit() {
    this.modalServiceObject = this.modalService.manageCollaborators;
    super.ngOnInit();
  }

  scrollTo() {
    let interval = window.setInterval(() => {
      let elmnt = document.getElementById("collaborator");
      if (elmnt) {
        elmnt.scrollIntoView(false);
        window.clearInterval(interval);
      }
    }, 1);
  }

  onRemoveCollaborator() {
    this.collaborators.splice(this.collaboratorIndex, 1);
    this.collaboratorIndex = undefined;
    if (this.collaborators.length == 0) this.close();
  }
}