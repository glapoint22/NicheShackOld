import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportReviewComponent } from './report-review.component';
import { DialogBoxModule } from '../dialog-box/dialog-box.module';

@NgModule({
  declarations: [ReportReviewComponent],
  imports: [
    CommonModule,
    DialogBoxModule
  ],
  exports: [ReportReviewComponent]
})
export class ReportReviewModule { }
