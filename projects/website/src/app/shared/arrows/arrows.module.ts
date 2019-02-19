import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowsComponent } from './arrows.component';

@NgModule({
  declarations: [ArrowsComponent],
  imports: [
    CommonModule
  ],
  exports: [ArrowsComponent]
})
export class ArrowsModule { }
