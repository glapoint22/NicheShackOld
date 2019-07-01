import { Component } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class DialogBoxComponent extends ModalComponent {
  public submitted: boolean;

  constructor(modalService: ModalService, router: Router) { super(modalService, router) }

  onSubmit(){
    this.submitted = true;
  }
}