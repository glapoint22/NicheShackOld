import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaViewerComponent } from './media-viewer.component';
import { ArrowsModule } from '../arrows/arrows.module';
import { PaginatorModule } from '../paginator/paginator.module';
import { ModalModule } from 'src/app/components/modal/modal.module';

@NgModule({
  declarations: [MediaViewerComponent],
  imports: [
    CommonModule,
    ArrowsModule,
    PaginatorModule,
    ModalModule
  ],
  exports: [MediaViewerComponent]
})
export class MediaViewerModule { }
