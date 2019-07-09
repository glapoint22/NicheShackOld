import { Component } from '@angular/core';
import { Review } from '../../shared/review/review';
import { ValidationFormComponent } from '../../shared/validation-form/validation-form.component';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss', '../../shared/validation-form/validation-form.component.scss']
})
export class WriteReviewComponent extends ValidationFormComponent{
  public review: Review = new Review();
  
  submitData(){
    console.log('submitting data!')
  }

}