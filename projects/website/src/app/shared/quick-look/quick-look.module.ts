import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickLookComponent } from "./quick-look.component";
import { StarsModule } from '../stars/stars.module';

@NgModule({
  declarations: [QuickLookComponent],
  imports: [
    CommonModule,
    StarsModule
  ],
  exports: [QuickLookComponent]
})
export class QuickLookModule { }
