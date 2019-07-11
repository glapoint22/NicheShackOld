import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListComponent } from './create-list.component';
import { FormsModule } from '@angular/forms';
import { DialogBoxModule } from '../dialog-box/dialog-box.module';

@NgModule({
  declarations: [CreateListComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogBoxModule
  ],
  exports: [CreateListComponent]
})
export class CreateListModule { }
