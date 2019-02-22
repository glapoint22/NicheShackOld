import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent extends ModalComponent implements OnInit  {
  public currentVideo: SafeUrl;
  public videosCount: number;
  public title: string;
  public currentVideoIndex: number;
  public videos: Array<string>;

  constructor(private sanitizer: DomSanitizer, modalService: ModalService, router: Router) { super(modalService, router)}

  ngOnInit() {
    this.videos = this.modalService.videoPlayer.videos;
    this.videosCount = this.videos.length;
    this.title = this.modalService.videoPlayer.productName;
    this.setVideo(0);
    this.modalServiceObject = this.modalService.videoPlayer;
    this.isClosable = true;
    super.ngOnInit();
  }

  showNextVideo(direction: number) {
    this.setVideo(this.currentVideoIndex + direction);
  }

  showVideo(index: number) {
    this.setVideo(index);
  }

  close() {
    this.currentVideo = this.desanitize('');
    super.close();
  }

  setVideo(index: number) {
    this.currentVideoIndex = index;
    this.currentVideo = this.desanitize(this.videos[index]);
  }

  desanitize(string: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }
}