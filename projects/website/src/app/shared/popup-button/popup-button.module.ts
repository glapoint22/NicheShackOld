import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupButtonComponent } from './popup-button.component';



@NgModule({
  declarations: [PopupButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [PopupButtonComponent]
})
export class PopupButtonModule { }
