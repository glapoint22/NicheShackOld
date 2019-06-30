import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'media-group',
  templateUrl: './media-group.component.html',
  styleUrls: ['./media-group.component.scss']
})
export class MediaGroupComponent {
  @Input() media: Array<any> = [];
  @Input() productName: string;

  constructor(private modalService: ModalService) { }

  onClick(index: number) {
    this.modalService.mediaViewer.media = this.media;
    this.modalService.mediaViewer.productName = this.productName;
    this.modalService.mediaViewer.show = true;
    this.modalService.mediaViewer.index = index;
  }
}