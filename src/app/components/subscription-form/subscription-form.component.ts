import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent extends ModalComponent implements OnInit {
  public name: string;
  public email: string;

  constructor(modalService: ModalService, router: Router, private dataService: DataService) { super(modalService, router) }

  ngOnInit() {
    this.isClosable = true;
    this.modalServiceObject = this.modalService.subscriptionForm;
    super.ngOnInit();
  }

  onSubmit(form): void {
    if (form.form.status !== 'VALID') return;
    this.modalServiceObject.show = false;

    this.dataService.post('api/Subscriptions', {
      name: this.name,
      email: this.email
    })
      .subscribe((response: any) => {
        response;
      });
  }

}
