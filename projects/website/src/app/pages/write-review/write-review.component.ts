import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Review } from '../../shared/review/review';
import { ValidationPage } from '../validation-page/Validation-page';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss', '../validation-page/validation-page.scss']
})
export class WriteReviewComponent extends ValidationPage implements OnInit {
  public review: Review = new Review();
  public product: any = {};
  public submitted: boolean;

  constructor(titleService: Title, metaService: Meta, @Inject(DOCUMENT) document, @Inject(PLATFORM_ID) platformId: Object, private route: ActivatedRoute, private router: Router) { super(titleService, metaService, document, platformId); }

  ngOnInit() {
    this.title = 'Write a Review';
    this.share = false;

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      let productId = queryParams.get('id');

      this.product.title = 'The Best Bodyweight Exercises You\'ve Never Heard Of';
      this.product.image = 'e9a794bc40f14f709e6636aefbfe5d43.png'
    });
    super.ngOnInit();
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

  goHome() {
    this.router.navigate(['']);
  }
}