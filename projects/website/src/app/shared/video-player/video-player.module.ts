import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import { ArrowsModule } from '../arrows/arrows.module';
import { PaginatorModule } from '../paginator/paginator.module';

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
