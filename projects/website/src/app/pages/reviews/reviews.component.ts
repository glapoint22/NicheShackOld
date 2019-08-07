import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Review } from '../../shared/review/review';
import { QueryParametersService } from '../../query-parameters.service';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent extends Page implements OnInit {
  public product: any;
  public pageCount: number;
  public reviewsPerPage = 10;
  public currentPage: number;
  public reviewsStart: number;
  public reviewsEnd: number;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    public modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private queryParametersService: QueryParametersService,
    @Inject(PLATFORM_ID) private platformId: Object) { super(titleService, metaService, document) }

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {

      if (isPlatformBrowser(this.platformId)) {
        //Scroll to top
        let body = document.scrollingElement || document.documentElement;
        body.scrollTop = 0;
      }


      this.queryParametersService.queryParams = queryParams;

      // Current page
      this.currentPage = Number.parseInt(queryParams.get('page')) || 1; // This should be from database

      // **TEMP**
      let reviews: Array<Review> = [];
      for (let i = 0; i < this.reviewsPerPage; i++) {
        reviews.push({
          id: i,
          title: 'This Product is Awesome!',
          rating: 4,
          username: 'ggump22',
          date: 'Jun 27, 2019',
          isVerified: true,
          text: 'I heard the hype of this game for years and years. Obviously it is regarded highly in the community, but by the time I bought a PS4 it was a bit old. I can only say that this game aged exceptionally well. It still looks great, the gameplay is fun and engaging, but why I came to write this review is the story. HANDS DOWN, the BEST story to any game I\'ve ever played. The characters and their personalities are just perfect. The voice acting, the mannerisms of the characters during gameplay depending on the mood, the cut scenes. They are all just brilliantly done. If for no other reason, buy this game just for the story. For the price it\'s at now, it\'s a steal. This is a game you HAVE to experience. I\'ve never felt so strongly toward the characters of a game. It was more along the lines of reading a book or watching a movie. I urge you to give this game a play through, you won\'t regret it.',
          likes: 10,
          dislikes: 2
        });
      }

      // Product
      this.product = {
        id: 'FRT6YHJE4J',
        image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
        title: 'The Best Bodyweight Exercises You\'ve Never Heard Of',
        urlTitle: 'the-best-bodyweight-exercises-youve-never-heard-of',
        minPrice: 9.99,
        maxPrice: 0,
        totalReviews: 222,
        rating: 5,
        oneStar: 0,
        twoStars: 0.04,
        threeStars: 0.08,
        fourStars: 0.22,
        fiveStars: 0.64,
        reviews: reviews,
        positiveReview: {
          id: 0,
          title: 'This Product is Awesome!',
          rating: 4,
          username: 'fuckhead',
          date: 'Jun 27, 2019',
          isVerified: true,
          text: 'I heard the hype of this game for years and years. Obviously it is regarded highly in the community, but by the time I bought a PS4 it was a bit old. I can only say that this game aged exceptionally well. It still looks great, the gameplay is fun and engaging, but why I came to write this review is the story. HANDS DOWN, the BEST story to any game I\'ve ever played. The characters and their personalities are just perfect. The voice acting, the mannerisms of the characters during gameplay depending on the mood, the cut scenes. They are all just brilliantly done. If for no other reason, buy this game just for the story. For the price it\'s at now, it\'s a steal. This is a game you HAVE to experience. I\'ve never felt so strongly toward the characters of a game. It was more along the lines of reading a book or watching a movie. I urge you to give this game a play through, you won\'t regret it.',
          likes: 10,
          dislikes: 0
        },
        negativeReview: {
          id: 1,
          title: 'Don\'t buy this!',
          rating: 1,
          username: 'asshole',
          date: 'May 22, 2019',
          isVerified: false,
          text: 'This is the worst product I have ever bought. If you want to be dissapointed, then go ahead and buy the stupid thing. It is junk and worthless!',
          likes: 8,
          dislikes: 0
        }
      }

      this.reviewsStart = this.reviewsPerPage * (this.currentPage - 1) + 1;
      this.reviewsEnd = this.reviewsStart + this.product.reviews.length - 1;
      this.pageCount = Math.ceil(this.product.totalReviews / this.reviewsPerPage);

      this.title = 'Customer Reviews: ' + this.product.title;
      this.description = 'Read customer reviews for ' + this.product.title + ' and learn more about this item from our customers before you buy at NicheShack.com.';
      this.share = false;
      super.ngOnInit();
    });
  }

  backToItem() {
    this.router.navigate([this.product.urlTitle]);
  }
}