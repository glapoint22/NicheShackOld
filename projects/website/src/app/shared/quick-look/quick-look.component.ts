import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'quick-look',
  templateUrl: './quick-look.component.html',
  styleUrls: ['./quick-look.component.scss']
})
export class QuickLookComponent extends ModalComponent implements OnInit {
  public product: Product;

  constructor(modalService: ModalService, router: Router) { super(modalService, router) }

  ngOnInit() {
    this.product = this.modalService.quickLook.product;
    this.modalServiceObject = this.modalService.quickLook;

    // TODO: Add description and media to product in database
    this.product.media = [
        {
          url: '//player.vimeo.com/video/219797629?title=0&byline=0&portrait=0&color=ffffff',
          thumbnail: 'https://i.vimeocdn.com/video/637660809_88',
          type: 'Video'
        },
        {
          url: 'https://www.youtube.com/embed/ReDQoqN5O88',
          thumbnail: 'https://img.youtube.com/vi/ReDQoqN5O88/default.jpg',
          type: 'Video'
        },
        {
          url: 'https://www.youtube.com/embed/O9IRRADnnEk',
          thumbnail: 'https://img.youtube.com/vi/O9IRRADnnEk/default.jpg',
          type: 'Video'
        },
        {
          url: '//player.vimeo.com/video/242450172?title=0&byline=0&portrait=0&color=ffffff',
          thumbnail: 'https://i.vimeocdn.com/video/666623530_88',
          type: 'Video'
        },
        {
          url: 'https://www.youtube.com/embed/cvOMIlFOrh0',
          thumbnail: 'https://img.youtube.com/vi/cvOMIlFOrh0/default.jpg',
          type: 'Video'
        },
        {
          url: '0b935a68e3684bf1a9ec01beab0deea8.png',
          thumbnail: 'https://i.vimeocdn.com/video/655639835_88',
          type: 'Image'
        },
        {
          url: '19c79c266bc04c91bc4947cd3caee5e3.png',
          thumbnail: 'https://i.vimeocdn.com/video/588134701_88',
          type: 'Image'
        },
        {
          url: 'dfca7ec8f7d943d3a8eb1a184918d5d4.jpg',
          thumbnail: 'https://i.vimeocdn.com/video/609716244_88',
          type: 'Image'
        },
        {
          url: '78a34d320fed4ca6843721145522dc03.png',
          thumbnail: 'https://img.youtube.com/vi/LLMB5QdDpso/default.jpg',
          type: 'Image'
        },
        {
          url: 'cba24ceff327461ab887f10872c163de.png',
          thumbnail: 'https://img.youtube.com/vi/ZCQ7nXAtf4M/default.jpg',
          type: 'Image'
        }
      ];
      this.product.description = 'My description';
    super.ngOnInit();
  }
}