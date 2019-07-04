import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductMedia } from '../product/product-media';

@Component({
  selector: 'media-group',
  templateUrl: './media-group.component.html',
  styleUrls: ['./media-group.component.scss']
})
export class MediaGroupComponent {
  @Input() media: Array<ProductMedia>;
  @Input() productTitle: string;

  constructor(private modalService: ModalService) { }

  onClick(currentMedia: ProductMedia) {
    this.modalService.mediaViewer.media = this.media;
    this.modalService.mediaViewer.currentMedia = currentMedia;
    this.modalService.mediaViewer.productTitle = this.productTitle;
    this.modalService.mediaViewer.show = true;
  }
}