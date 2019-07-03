import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging.component';
import { ArrowsModule } from '../arrows/arrows.module';

@NgModule({
  declarations: [PagingComponent],
  imports: [
    CommonModule,
    ArrowsModule
  ],
  exports: [PagingComponent]
})
export class PagingModule { }
