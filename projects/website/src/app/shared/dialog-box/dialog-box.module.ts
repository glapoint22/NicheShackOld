import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box.component';
import { ModalModule } from 'src/app/components/modal/modal.module';

@NgModule({
  declarations: [DialogBoxComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [DialogBoxComponent]
})
export class DialogBoxModule { }
