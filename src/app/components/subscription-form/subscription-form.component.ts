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

  getPostData(): any {
    return {
      name: this.name,
      email: this.email,
      productId: this.modalService.subscriptionForm.product.id,
      productName: this.modalService.subscriptionForm.product.name,
      hoplink: this.modalService.subscriptionForm.product.hopLink
    }
  }

  onResponse(response: any) {
    this.router.navigate(['/welcome'], { queryParams: { 'p': response } });
  }

  close() {
    if (this.modalService.subscriptionForm.product) {
      this.modalService.loading = true;
      window.location.href = this.modalService.subscriptionForm.product.hopLink;
      this.modalService.isHoplink = true;
    } else {
      this.router.navigate(['']);
    }
    super.close();
  }
}