import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'quick-look',
  templateUrl: './quick-look.component.html',
  styleUrls: ['./quick-look.component.scss']
})
export class QuickLookComponent extends ModalComponent implements OnInit {
  public product: any;

  constructor(modalService: ModalService, router: Router) { super(modalService, router) }

  ngOnInit() {
    // TODO: Add description and videos to product in database
    this.product = {
      description: this.modalService.quickLook.product.description,
      videos: [
        {
          url: '//player.vimeo.com/video/219797629?title=0&byline=0&portrait=0&color=ffffff',
          thumbnail: 'https://i.vimeocdn.com/video/637660809_88'
        },
        {
          url: 'https://www.youtube.com/embed/ReDQoqN5O88',
          thumbnail: 'https://img.youtube.com/vi/ReDQoqN5O88/default.jpg'
        },
        {
          url: 'https://www.youtube.com/embed/O9IRRADnnEk',
          thumbnail: 'https://img.youtube.com/vi/O9IRRADnnEk/default.jpg'
        },
        {
          url: '//player.vimeo.com/video/242450172?title=0&byline=0&portrait=0&color=ffffff',
          thumbnail: 'https://i.vimeocdn.com/video/666623530_88'
        },
        {
          url: 'https://www.youtube.com/embed/cvOMIlFOrh0',
          thumbnail: 'https://img.youtube.com/vi/cvOMIlFOrh0/default.jpg'
        },
        {
          url: '//player.vimeo.com/video/234130228?title=0&byline=0&portrait=0&color=ffffff',
          thumbnail: 'https://i.vimeocdn.com/video/655639835_88'
        },
        {
          url: '//player.vimeo.com/video/180028667?title=0&byline=0&portrait=0&color=ffffff',
          thumbnail: 'https://i.vimeocdn.com/video/588134701_88'
        },
        {
          url: '//player.vimeo.com/video/197072042?title=0&byline=0&portrait=0&color=ffffff',
          thumbnail: 'https://i.vimeocdn.com/video/609716244_88'
        },
        {
          url: 'https://www.youtube.com/embed/LLMB5QdDpso',
          thumbnail: 'https://img.youtube.com/vi/LLMB5QdDpso/default.jpg'
        },
        {
          url: 'https://www.youtube.com/embed/ZCQ7nXAtf4M',
          thumbnail: 'https://img.youtube.com/vi/ZCQ7nXAtf4M/default.jpg'
        }
      ]
    }
    this.modalServiceObject = this.modalService.quickLook;
    this.isClosable = true;
    super.ngOnInit();
  }

  onVideoClick(index: number) {
    this.modalService.videoPlayer.videos = this.product.videos;
    this.modalService.videoPlayer.productName = this.modalService.quickLook.product.name;
    this.modalService.videoPlayer.show = true;
    this.modalService.videoPlayer.index = index;
  }
}