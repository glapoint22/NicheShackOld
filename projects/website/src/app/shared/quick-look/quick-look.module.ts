import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickLookComponent } from "./quick-look.component";
import { StarsModule } from '../stars/stars.module';
import { MediaGroupModule } from '../media-group/media-group.module';
import { ModalModule } from 'src/app/components/modal/modal.module';

@NgModule({
  declarations: [QuickLookComponent],
  imports: [
    CommonModule,
    StarsModule,
    MediaGroupModule,
    ModalModule
  ],
  exports: [QuickLookComponent]
})
export class QuickLookModule { }
