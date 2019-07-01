import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.scss']
})
export class AddToListComponent extends ModalComponent implements OnInit {
  @Input() product: any;

  constructor(modalService: ModalService, router: Router) { super(modalService, router)}

  ngOnInit() {
    this.modalServiceObject = this.modalService.addToList;
    this.isClosable = true;
    super.ngOnInit();
  }

}
