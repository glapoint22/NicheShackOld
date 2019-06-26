import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
  

  constructor(private modalService: ModalService, private router: Router) { }

  ngOnInit() {
    // TODO: Add rating, review count, urlTitle, and minPrice/maxPrice to product in database
    // Remove description, hoplink, and videos
    this.product.rating = 2.5;
    this.product.reviewCount = 9999;
    this.product.minPrice = 37.48;
    this.product.maxPrice = 122.22;
    this.product.urlTitle = 'fat-loss-activation';
  }

  

  onClick() {
    // if (this.cookieService.check('Products')) {
    //   let products: Array<string> = this.cookieService.get('Products').split('~');
    //   if (products.findIndex(x => x === this.product.id) === -1) {
    //     products.push(this.product.id);
    //     this.cookieService.set('Products', products.join('~'), 9999);
    //   }
    // } else {
    //   this.cookieService.set('Products', this.product.id, 9999);
    // }

    // window.location.href = this.product.hopLink;
    // if (this.cookieService.check('session')) {
    //   this.modalService.loading = true;
    //   window.location.href = this.product.hopLink;
    // } else {
    //   this.modalService.subscriptionForm.caption = 'Would you like to sign up to receive emails on products like "' + this.product.name + '"?';
    //   this.modalService.subscriptionForm.submitButton = 'Yes! Sign me up';
    //   this.modalService.subscriptionForm.cancelButton = 'No Thanks';
    //   this.modalService.subscriptionForm.product = this.product;
    //   this.modalService.subscriptionForm.show = true;
    // }
    this.router.navigate([this.product.urlTitle]);
  }

  onQuickLookButtonClick() {
    // this.modalService.videoPlayer.videos = this.product.videos;
    // this.modalService.videoPlayer.productName = this.product.name;
    // this.modalService.videoPlayer.show = true;
    this.modalService.quickLook.show = true;
    this.modalService.quickLook.product = this.product;
  }
}
