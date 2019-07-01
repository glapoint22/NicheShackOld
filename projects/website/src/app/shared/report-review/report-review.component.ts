import { Component, OnInit } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'report-review',
  templateUrl: './report-review.component.html',
  styleUrls: ['../../shared/dialog-box/dialog-box.component.scss']
})
export class ReportReviewComponent extends DialogBoxComponent implements OnInit {

  ngOnInit() {
    this.modalServiceObject = this.modalService.reportReview;
    super.ngOnInit();
  }

  onSubmit() {
    // Do stuff
    super.onSubmit();
  }
}
