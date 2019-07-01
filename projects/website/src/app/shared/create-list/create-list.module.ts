import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListComponent } from './create-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CreateListComponent]
})
export class CreateListModule { }
