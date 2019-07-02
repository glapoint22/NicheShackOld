import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public product: any = {};

  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.product.image = 'e9a794bc40f14f709e6636aefbfe5d43.png';
    this.product.name = "The Best Bodyweight Exercises You've Never Heard Of";
    this.product.minPrice = 9.99;
    this.product.maxPrice = 0;

    this.product.totalReviews = 20;
      this.product.rating = 5;

      this.product.reviewStats = [
        {
          name: '5 Stars',
          percentage: .64
        },
        {
          name: '4 Stars',
          percentage: .22
        },
        {
          name: '3 Stars',
          percentage: .08
        },
        {
          name: '2 Stars',
          percentage: .04
        },
        {
          name: '1 Star',
          percentage: 0
        }
      ]


      this.product.reviews = [
        {
          title: 'This Prodct is Awesome!',
          rating: 4,
          username: 'ggump22',
          date: 'Jun 27, 2019',
          isVerified: true,
          text: 'I heard the hype of this game for years and years. Obviously it is regarded highly in the community, but by the time I bought a PS4 it was a bit old. I can only say that this game aged exceptionally well. It still looks great, the gameplay is fun and engaging, but why I came to write this review is the story. HANDS DOWN, the BEST story to any game I\'ve ever played. The characters and their personalities are just perfect. The voice acting, the mannerisms of the characters during gameplay depending on the mood, the cut scenes. They are all just brilliantly done. If for no other reason, buy this game just for the story. For the price it\'s at now, it\'s a steal. This is a game you HAVE to experience. I\'ve never felt so strongly toward the characters of a game. It was more along the lines of reading a book or watching a movie. I urge you to give this game a play through, you won\'t regret it.',
          likes: 10,
          dislikes: 2
        },
        {
          title: 'Don\'t buy this!',
          rating: 1,
          username: 'douchebag',
          date: 'May 22, 2019',
          isVerified: false,
          text: 'This is the worst product I have ever bought. If you want to be dissapointed, then go ahead and buy the stupid thing. It is junk and worthless!',
          likes: 0,
          dislikes: 6
        }
      ],

      this.product.positiveReview = {
        title: 'This Prodct is Awesome!',
        rating: 4,
        username: 'fuckhead',
        date: 'Jun 27, 2019',
        isVerified: true,
        text: 'I heard the hype of this game for years and years. Obviously it is regarded highly in the community, but by the time I bought a PS4 it was a bit old. I can only say that this game aged exceptionally well. It still looks great, the gameplay is fun and engaging, but why I came to write this review is the story. HANDS DOWN, the BEST story to any game I\'ve ever played. The characters and their personalities are just perfect. The voice acting, the mannerisms of the characters during gameplay depending on the mood, the cut scenes. They are all just brilliantly done. If for no other reason, buy this game just for the story. For the price it\'s at now, it\'s a steal. This is a game you HAVE to experience. I\'ve never felt so strongly toward the characters of a game. It was more along the lines of reading a book or watching a movie. I urge you to give this game a play through, you won\'t regret it.',
        likes: 10
      }

      this.product.negativeReview = {
        title: 'Don\'t buy this!',
        rating: 1,
        username: 'asshole',
        date: 'May 22, 2019',
        isVerified: false,
        text: 'This is the worst product I have ever bought. If you want to be dissapointed, then go ahead and buy the stupid thing. It is junk and worthless!',
        likes: 8
      }
  }

}
