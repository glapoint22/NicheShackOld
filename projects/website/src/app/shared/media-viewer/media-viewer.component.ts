import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { ProductMedia } from '../product/product-media';

@Component({
  selector: 'media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent extends ModalComponent implements OnInit {
  public currentMedia: ProductMedia;
  public title: string;
  public media: Array<ProductMedia>;
  public index: number;

  constructor(private sanitizer: DomSanitizer, modalService: ModalService, router: Router) { super(modalService, router)}

  ngOnInit() {
    this.media = this.modalService.mediaViewer.media;
    this.currentMedia = this.modalService.mediaViewer.currentMedia;
    this.title = this.modalService.mediaViewer.productTitle;
    this.index = this.getIndex();
    this.modalServiceObject = this.modalService.mediaViewer;
    super.ngOnInit();
  }

  desanitize(string: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }

  showNextMedia(direction: number) {
    this.index = this.getIndex() + direction;
    this.currentMedia = this.media[this.index];
  }

  showMedia(index: number) {
    this.index = index;
    this.currentMedia = this.media[index];
  }

  getIndex() {
    return this.media.findIndex(x => x == this.currentMedia);
  }
}