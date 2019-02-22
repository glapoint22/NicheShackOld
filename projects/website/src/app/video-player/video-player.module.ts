import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import { ArrowsModule } from '../shared/arrows/arrows.module';
import { PaginatorModule } from '../shared/paginator/paginator.module';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    ArrowsModule,
    PaginatorModule
  ],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
