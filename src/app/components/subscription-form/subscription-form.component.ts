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

  constructor(modalService: ModalService, router: Router, public dataService: DataService) { super(modalService, router) }

  ngOnInit() {
    this.isClosable = true;
    this.modalServiceObject = this.modalService.subscriptionForm;
    super.ngOnInit();
  }

  onSubmit(form): void {
    if (form.form.status !== 'VALID') return;
    this.modalServiceObject.show = false;

    this.dataService.post('api/Subscriptions', this.getPostData()).subscribe((response: any) => {
      this.onResponse(response);
    });
  }

  getPostData() {
    return {
      name: this.name,
      email: this.email
    }
  }

  onResponse(response: any) {
    let product = this.modalService.subscriptionForm.product;
    let hoplink = product.hopLink + '?tid=' + response.customer.id + product.id;

    //If we have an existing customer, go straight to the product page
    if (response.customer.isExistingCustomer) {
      window.location.href = hoplink;
    } else {
      //We have a new customer so naviagate to the welcome page with product info
      this.dataService.data = {
        customer: response.customer.name,
        hoplink: hoplink,
        productName: product.name,
        isExistingCustomer: response.customer.isExistingCustomer
      }
      this.router.navigate(['/welcome']);
    }
  }

  close() {
    if (this.modalService.subscriptionForm.product) {
      this.modalService.loading = true;
      window.location.href = this.modalService.subscriptionForm.product.hopLink;
    } else {
      this.router.navigate(['']);
    }
    super.close();
  }
}