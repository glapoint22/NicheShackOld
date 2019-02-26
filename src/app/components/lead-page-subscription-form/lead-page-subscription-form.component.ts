import { Component } from '@angular/core';
import { SubscriptionFormComponent } from 'src/app/components/subscription-form/subscription-form.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'lead-page-subscription-form',
  templateUrl: '../subscription-form/subscription-form.component.html',
  styleUrls: ['../subscription-form/subscription-form.component.scss']
})
export class LeadPageSubscriptionFormComponent extends SubscriptionFormComponent {

  constructor(modalService: ModalService, router: Router, dataService: DataService) { super(modalService, router, dataService) }

  onResponse(response: any) {
    // this.dataService.data = {
    //   customer: response.customer.name,
    //   email: response.customer.email,
    //   isExistingCustomer: response.customer.isExistingCustomer,
    //   leadMagnet: response.leadMagnet
    // }
    // this.router.navigate(['/welcome']);
    window.location.href = 'https://www.nicheShack.com/welcome?p=' + response;
  }

  close() {
    this.modalServiceObject.show = false;
  }

  getPostData() {
    let data = super.getPostData();
    data['leadMagnet'] = this.modalService.subscriptionForm.leadMagnet;
    data['nicheId'] = this.modalService.subscriptionForm.nicheId;
    return data;
  }

}