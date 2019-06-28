import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent extends ModalComponent implements OnInit {
  public currentMedia: any = {};
  public title: string;
  public media: Array<any>;

  constructor(private sanitizer: DomSanitizer, modalService: ModalService, router: Router) { super(modalService, router)}

  ngOnInit() {
    this.media = this.modalService.mediaViewer.media;
    this.title = this.modalService.mediaViewer.productName;
    this.setCurrentMedia(this.modalService.mediaViewer.index);
    this.modalServiceObject = this.modalService.mediaViewer;
    this.isClosable = true;
    super.ngOnInit();
  }

  setCurrentMedia(index: number) {
    this.currentMedia.index = index;
    this.currentMedia.url = this.media[index].type == 'video' ? this.desanitize(this.media[index].url) : this.media[index].url;
    this.currentMedia.type = this.media[index].type;
  }

  desanitize(string: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }

  showNextMedia(direction: number) {
    this.setCurrentMedia(this.currentMedia.index + direction);
  }

  showMedia(index: number) {
    this.setCurrentMedia(index);
  }

  close() {
    this.currentMedia.url = this.desanitize('');
    super.close();
  }
}