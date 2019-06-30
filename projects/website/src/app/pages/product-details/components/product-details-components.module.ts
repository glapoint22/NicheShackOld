import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportItemComponent } from './report-item/report-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReportItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ReportItemComponent]
})
export class ProductDetailsComponentsModule { }
