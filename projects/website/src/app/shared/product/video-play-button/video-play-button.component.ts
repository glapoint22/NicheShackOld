import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-play-button',
  templateUrl: './video-play-button.component.html',
  styleUrls: ['./video-play-button.component.scss']
})
export class VideoPlayButtonComponent {
  @Input() videoCount: number;
  @Output() onClick = new EventEmitter<void>();
}