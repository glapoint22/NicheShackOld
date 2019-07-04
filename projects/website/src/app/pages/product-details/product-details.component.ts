import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { DetailProduct } from '../../shared/product/detail-product';
import { ProductsSlider } from '../../shared/products-slider/products-slider';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: DetailProduct;
  public productsSlider: Array<ProductsSlider>;


  constructor(private route: ActivatedRoute, public modalService: ModalService, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(() => {
      //Scroll to top
      let body = document.scrollingElement || document.documentElement;
      body.scrollTop = 0;

      this.product = {
        id: 'FRT6YHJE4J',
        media: [
          {
            url: '//player.vimeo.com/video/219797629?title=0&byline=0&portrait=0&color=ffffff',
            thumbnail: 'https://i.vimeocdn.com/video/637660809_88',
            type: 'video'
          },
          {
            url: 'https://www.youtube.com/embed/ReDQoqN5O88',
            thumbnail: 'https://img.youtube.com/vi/ReDQoqN5O88/default.jpg',
            type: 'video'
          },
          {
            url: 'https://www.youtube.com/embed/O9IRRADnnEk',
            thumbnail: 'https://img.youtube.com/vi/O9IRRADnnEk/default.jpg',
            type: 'video'
          },
          {
            url: '//player.vimeo.com/video/242450172?title=0&byline=0&portrait=0&color=ffffff',
            thumbnail: 'https://i.vimeocdn.com/video/666623530_88',
            type: 'video'
          },
          {
            url: 'https://www.youtube.com/embed/cvOMIlFOrh0',
            thumbnail: 'https://img.youtube.com/vi/cvOMIlFOrh0/default.jpg',
            type: 'video'
          },
          {
            url: '0b935a68e3684bf1a9ec01beab0deea8.png',
            thumbnail: 'https://i.vimeocdn.com/video/655639835_88',
            type: 'image'
          },
          {
            url: '19c79c266bc04c91bc4947cd3caee5e3.png',
            thumbnail: 'https://i.vimeocdn.com/video/588134701_88',
            type: 'image'
          },
          {
            url: 'dfca7ec8f7d943d3a8eb1a184918d5d4.jpg',
            thumbnail: 'https://i.vimeocdn.com/video/609716244_88',
            type: 'image'
          },
          {
            url: '78a34d320fed4ca6843721145522dc03.png',
            thumbnail: 'https://img.youtube.com/vi/LLMB5QdDpso/default.jpg',
            type: 'image'
          },
          {
            url: 'cba24ceff327461ab887f10872c163de.png',
            thumbnail: 'https://img.youtube.com/vi/ZCQ7nXAtf4M/default.jpg',
            type: 'image'
          }
        ],
        hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
        image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
        description: '"3-Minute Meditations" are super-short, super-simple, uncomplicated introductions to the art and science of meditation. With these breakthrough methods, you\'ll be well on your way to getting all the benefits of meditation while sitting about 1/10th of the time of other programs. "3-Minute Meditations" is guaranteed to lead you to incredible results if you practice daily. And the best part is it only takes 180 seconds a day. "3-Minute Meditations" is built around 7 guided audio meditations/visualizations systematically utilized throughout the four weeks. These include Intentional, Oneness, Mantra, Forgiveness, Mindfulness, Heart & Healing meditations/visualizations. With a simple, intentional, easy-to-implement practice, you\'ll witness an increase in peace, joy & gratitude and a decrease in stress, anxiety & overwhelm in your life.',
        title: 'Fat Loss Activation',
        urlTitle: 'fat-loss-activation',
        minPrice: 9.99,
        maxPrice: 22,
        content: {
          items: [
            {
              type: 'pdf',
              title: 'Isometrics Mass Main Manual',
              priceIndices: [0, 2]
            },
            {
              type: 'dvd',
              title: 'Isometrics Mass Quick Start Video Guide',
              priceIndices: [0, 1, 3]
            }
          ],
          pricePoints: [
            {
              price: 9.99,
              frequency: 'Single Payment'
            },
            {
              price: 27.99,
              frequency: 'Monthly'
            },
            {
              price: 58.99,
              frequency: 'Quarterly'
            },
            {
              price: 101.99,
              frequency: 'Yearly'
            }
          ]
        },
        totalReviews: 20,
        rating: 5,
        reviewStats: [
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
        ],
        reviews: [
          {
            id: 0,
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
            id: 1,
            title: 'Don\'t buy this!',
            rating: 1,
            username: 'douchebag',
            date: 'May 22, 2019',
            isVerified: false,
            text: 'This is the worst product I have ever bought. If you want to be dissapointed, then go ahead and buy the stupid thing. It is junk and worthless!',
            likes: 0,
            dislikes: 6
          }
        ]
      }

      this.productsSlider = null;
    });
  }

  hasPricePoint(priceIndices: Array<number>, index: number): boolean {
    return priceIndices.some(x => x == index);
  }


  onPublisherButtonClick() {
    window.location.href = this.product.hoplink;
  }

  onViewAllReviewsClick() {
    this.router.navigate(['/reviews/' + this.product.urlTitle]);
  }
}