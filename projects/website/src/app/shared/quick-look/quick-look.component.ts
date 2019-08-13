import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { Product } from '../product/product';
import { DataService } from 'src/app/services/data/data.service';
import { ProductMedia } from '../product/product-media';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'quick-look',
  templateUrl: './quick-look.component.html',
  styleUrls: ['./quick-look.component.scss']
})
export class QuickLookComponent extends ModalComponent implements OnInit {
  public product: Product;
  public media: ProductMedia;

  constructor(modalService: ModalService,
    router: Router,
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { super(modalService, router) }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      //Scroll to top
      let body = document.scrollingElement || document.documentElement;
      body.scrollTop = 0;
    }

    this.product = this.modalService.quickLook.product;
    this.modalServiceObject = this.modalService.quickLook;
    super.ngOnInit();

    this.dataService.get('api/Products/QuickLook', [{ key: 'id', value: this.product.id }])
      .subscribe(results => {
        this.media = results.media;
        this.product.description = results.description;
      });
  }

  onViewDetailsClick(){
    this.router.navigate([this.product.urlTitle]);
  }

  onReviewItemClick(){
    this.router.navigate(['/reviews/write-review'], { queryParams: {'id': this.product.id} });
  }
}