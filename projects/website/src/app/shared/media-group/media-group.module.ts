import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaGroupComponent } from './media-group.component';

@NgModule({
  declarations: [MediaGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [MediaGroupComponent]
})
export class MediaGroupModule { }
