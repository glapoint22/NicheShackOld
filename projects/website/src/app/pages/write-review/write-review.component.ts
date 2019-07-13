import { Component, OnInit } from '@angular/core';
import { Review } from '../../shared/review/review';
import { ValidationBase } from '../../shared/validation-base/validation-base';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss', '../../shared/validation-base/validation-base.scss']
})
export class WriteReviewComponent extends ValidationBase implements OnInit {
  public review: Review = new Review();
  public product: any = {};
  public submitted: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { super(); }

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      let productId = queryParams.get('id');

      this.product.title = 'The Best Bodyweight Exercises You\'ve Never Heard Of';
      this.product.image = 'e9a794bc40f14f709e6636aefbfe5d43.png'
    });
  }

  submitData() {
    this.submitted = true;
  }

  getStar(i: number) {
    if (i <= Math.floor(this.review.rating)) {
      return 'fas fa-star';
    } else {
      return 'far fa-star';
    }
  }

  goHome(){
    this.router.navigate(['']);
  }
}