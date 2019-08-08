import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { Product } from './product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  
  constructor(private modalService: ModalService, private router: Router) { }

  onClick() {
    this.router.navigate([this.product.urlTitle]);
  }

  onQuickLookButtonClick() {
    this.modalService.quickLook.show = true;
    this.modalService.quickLook.product = this.product as Product;
  }
}
