import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: any = {};


  constructor(private route: ActivatedRoute, public modalService: ModalService, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(data => {
      let body = document.scrollingElement || document.documentElement;

      //Scroll to top
      body.scrollTop = 0;
      this.product.media = [
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
      ];

      this.product.hoplink = 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/';
      this.product.image = 'e9a794bc40f14f709e6636aefbfe5d43.png';
      this.product.description = '"3-Minute Meditations" are super-short, super-simple, uncomplicated introductions to the art and science of meditation. With these breakthrough methods, you\'ll be well on your way to getting all the benefits of meditation while sitting about 1/10th of the time of other programs. "3-Minute Meditations" is guaranteed to lead you to incredible results if you practice daily. And the best part is it only takes 180 seconds a day. "3-Minute Meditations" is built around 7 guided audio meditations/visualizations systematically utilized throughout the four weeks. These include Intentional, Oneness, Mantra, Forgiveness, Mindfulness, Heart & Healing meditations/visualizations. With a simple, intentional, easy-to-implement practice, you\'ll witness an increase in peace, joy & gratitude and a decrease in stress, anxiety & overwhelm in your life.'
      this.product.name = 'Fat Loss Activation';
      this.product.minPrice = 9.99;
      this.product.maxPrice = 0;

      this.product.content = {
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
      }




      this.product.productSliders = [{ "caption": "Customers who bought this item also bought", "products": [{ "id": "86F7CEDD38", "name": "From Newbie to Millionaire", "hopLink": "https://6de5dhy8h0np1w84gfzv9rco38.hop.clickbank.net/", "description": "\"From Newbie to Millionaire\" includes absolutely everything you need to start generating real money immediately in your own online business. It's specifically designed to take you from theory to generating actual sales in the shortest time possible. This is the only internet marketing resource that contains exactly what you’ll need to plan, build, and operate a successful online business that makes money for you day after day.", "image": "fab66e3177d5406ab55b7642f0de6ecd.png", "price": 47, "videos": [] }, { "id": "7A95234741", "name": "Movie Review Profits", "hopLink": "https://b1b6cd49c3sm2qdac4gjqpt7fq.hop.clickbank.net/", "description": "\"Movie Review Profits\" is a step-by-step guide showing you how to get paid to watch movies, along with a complete list of the highest-paying websites and secret strategies showing you how to make even more money. Also included are some special free bonuses to help you make easy money doing other things, such as surfing the net or losing weight.", "image": "a29f28773e154adaab48a6355f2f4e5d.png", "price": 37, "videos": [] }, { "id": "2D9A4D612F", "name": "RealMoneyStreams", "hopLink": "https://a746flvaf2-v2y26-mdukegf3u.hop.clickbank.net/", "description": "With \"RealMoneyStreams,\" you'll get 1000 hours worth of interviews, video tutorials, case studies, and audio courses that will teach you how you can earn money online from the comfort of your own home. You'll get simple, step-by-step instructions on how to get started using the system and to be earning money online in no-time, even if you're a total newbie.", "image": "3570d8f5e5c641b88d8a9652c167a63b.png", "price": 37, "videos": [] }, { "id": "BD016C7B0E", "name": "Sells Like Hot Cakes", "hopLink": "https://1a4f5e13qatt1odcmbndk6pb-o.hop.clickbank.net/", "description": "\"Sells Like Hot Cakes\" is a step by step video course plus all the essential tools to help you get your shop started from scratch with no programming skills. You'll learn how to find a product that sells and how to avoid 11 mistakes that people make when they are starting out. You'll be shown the essential tools to research a product, to legally spy on your competitors, and to find out what works and to avoid wasting your time on what doesn’t.", "image": "4874db4d64dc411483de9b2b137934b0.png", "price": 0, "videos": [] }, { "id": "7AA60342C8", "name": "Sqribble", "hopLink": "https://84b74e34pzpkcz8nufwam9is04.hop.clickbank.net/", "description": "\"Sqribble\" is software that will help you create professional eBooks, reports, whitepapers, and other digital books in a matter of minutes with just a few clicks. \"Sqribble\" is simple to use with easy point and click technology and has 50 templates you can select from in 15 popular niche categories. Just click, design and publish your own ebooks, reports, and whitepapers in minutes.", "image": "e462144953e9416997d8817cab1770a1.png", "price": 67, "videos": [] }, { "id": "AB5E4DBD7E", "name": "Starting A Freelance Copywriting Business", "hopLink": "https://fc832c-fnatudlchx2ukir7kdm.hop.clickbank.net/", "description": "\"Starting A Freelance Copywriting Business\" provides you with tons of valuable insights about finding and attracting clients, writing copy that sells, and growing your skills so you have the potential to join the top copy dogs earning six figures or more. Better yet, it explains how to avoid all the pitfalls that prevent most from succeeding. This makes it an essential roadmap that will guide you from day one on your path to personal profit and career fulfillment.", "image": "b1c17f79454a411fb4aa5acd9a17749a.jpg", "price": 27, "videos": [] }, { "id": "912272B2D2", "name": "The Influencer Playbook", "hopLink": "https://220c59v9fbrp8q2emdpyzwqnsj.hop.clickbank.net/", "description": "\"The Influencer Playbook\" is a step-by-step guide on how to become an Influencer on Instagram and earn money at the same time while traveling to the most exotic places. You'll learn how to stop focusing on followers in the beginning and start focusing on the business model of posting on social media. You'll discover how to start with no followers and how you can create quality content if you’re just starting out.", "image": "387624da2c24492790588b1b4a6b05ae.png", "price": 37, "videos": [] }, { "id": "3AECAA6EA2", "name": "The Smoothie Diet", "hopLink": "https://5e028m6gc5xw1pcmtf0kx1uc4b.hop.clickbank.net/", "description": "\"The Smoothie Diet\" is a revolutionary new life-transformation system that not only guarantees to help you lose weight and feel better than you have in years, it also promises to eliminate more body fat faster than anything you’ve tried before.", "image": "0f807d78672141d083919b1505537391.jpg", "price": 37, "videos": [] }] }, { "caption": "Check out these related items", "products": [{ "id": "647A1621DC", "name": "Aikido Success Blueprint", "hopLink": "https://5a64eg26o3-m2q5zm8v9s8xvhp.hop.clickbank.net/", "description": "The \"Aikido Success Blueprint\" offers you a handy reference to a wealth of wisdom right at your fingertips. It is designed to complement your dojo training perfectly.", "image": "6e367257c695470a80ad6317f1b9b767.png", "price": 17, "videos": [] }, { "id": "5894829BFE", "name": "Fat Loss Activation", "hopLink": "https://78be2h21m9-q4pbi79r259tast.hop.clickbank.net/", "description": "\"Fat Loss Activation\" gives you an easy-to-follow program you can use today for taming your hunger hormone & activating your muscles for a leaner, stronger, healthier body in less than 15-minutes a day.", "image": "e9a794bc40f14f709e6636aefbfe5d43.png", "price": 10, "videos": [] }, { "id": "7E5FEA3F69", "name": "No Excuses Body Makeover Program", "hopLink": "https://14a04f-7n6noaz3eneejtgz3-j.hop.clickbank.net/", "description": "Simply put, the \"No Excuses Body Makeover\" program is the last weight loss membership you will ever need. Members receive access to schedule content, including motivational emails, as well as access to Carolyn Hansens fat loss members forum.", "image": "4632be7305e744c982c7357acc51a65e.png", "price": 4.95, "videos": [] }, { "id": "25D6ACACE7", "name": "Shred Kitchen", "hopLink": "https://7d006k4aeyvw0s1hwgobyyev30.hop.clickbank.net/", "description": "Shred Kitchen is an immediately downloadable guide to changing your relationship with food. It’s not so much a diet e-book, it’s a habit e-book and it‘s a compressive approach to improving your daily nutrition. It’s a blueprint for getting lean and healthy as hell and it’s highly organized and meticulously researched packed with next-level nutritional information.", "image": "432780dfeafb4355bb36d54550c7831e.png", "price": 67.99, "videos": [] }, { "id": "59A86C6670", "name": "The Natural Thyroid Diet", "hopLink": "https://15babcw2m4-s2m37ukvrkpcw5d.hop.clickbank.net/", "description": "\"The Natural Thyroid Diet - Your Holistic Guide to Living Well, Living Vibrantly\" 2018 edition goes beyond being just another diet eBook. This eBook was rewritten from scratch as there was so much new information, including the real reasons why we are seeing an epidemic of thyroid disorders. You will discover this 60-page eBook provides a ton of information that combines a natural healing approach with the latest scientific research. You will learn how to heal your thyroid by focusing on a real food diet and avoid the worst thyroid-damaging foods (and it’s not just gluten and sugar). You will also learn how to get healthy and lose weight without dieting by hacking your biology with thyroid specific nutrients. You will be able to plan healthy meals without feeling overwhelmed and generate an optimistic mindset to help you redefine your relationship with food.", "image": "c5c43fd55f0249c5a37098214e1598ab.png", "price": 14.95, "videos": [] }, { "id": "1E651A4169", "name": "The Truth About Food Ingredients", "hopLink": "https://3d579du4c9lt6pc7ydud35lr68.hop.clickbank.net/", "description": "\"The Truth About Food Ingredients\" 1 click Toxifact Tool is a powerful piece of software that is designed to be used on any phone or device small enough that it can be taken with you to the grocery store. Plug any food ingredient into the powerful software and it’ll tell you if that food item contains any hidden toxic ingredients that you must avoid. It is that simple. It’ll be like having your own personal expert dietitian with you every time you step into the grocery store.", "image": "6c0b9444526d4450a0b1a0226e3bb79a.png", "price": 17, "videos": [] }, { "id": "33B42E3AEB", "name": "30/30 Bubble Butt", "hopLink": "https://7b6adj5gjauv8v3xds2xkrbr3n.hop.clickbank.net/", "description": "You deserve to have the body you want and the bubble butt of your dreams. This will change your life and our program is easy and effective. You have nothing to lose and a dream to gain. The sooner you start, the sooner you will see results.", "image": "1e928c0cd6314161b764274e37c857b0.jpg", "price": 59, "videos": [] }, { "id": "36287E1660", "name": "Back Pain Relief 4 Life", "hopLink": "https://df790d4bg3rx7wbimak08s1seb.hop.clickbank.net/", "description": "\"Back Pain Relief 4 Life\" is an alternative approach to treating pain that is immensely more successful (and cheaper) than the radical, costly conventional procedures. The secret is the unique combination of 8 x 2-minute movements, which you’ve probably never seen before. This isn’t yoga. This isn’t Pilates. This isn’t even “exercise.” These 8 simple movements systematically address specific muscle imbalances, the real cause of your back pain. And all you need is a place to lie down, a firm pillow or towel to put under your head, and a chair. That’s it. So that means you can do this just about anywhere. At home, in the office or even in a hotel room when you travel. And the best part is a complete session takes no more than 20 minutes. It easily fits into your schedule. In the time it takes to drive to your chiropractor, massage therapist or doctor’s office, you can be experiencing true pain relief–healing your back from perhaps decades of injury. With the \"Back Pain Relief 4 Life\" program, you won’t need a PhD in anatomy to get results. You don’t have to read a huge book, take a class, do a self-assessment or take any kind of muscular imbalance test before you get started. All you need is the desire to end your pain, 8 simple movements, 16 minutes and the ability to follow easy directions.", "image": "d1dd8a1c1b724906b2e1d35680694772.png", "price": 37, "videos": [] }, { "id": "8C21F8B747", "name": "Feel Good Knees for Fast Pain Relief", "hopLink": "https://d199cjv8f5uk9kaqae0npdrw9p.hop.clickbank.net/", "description": "\"Feel Good Knees\" is an easy-to-follow 5-minute daily ritual and it actually “feels good while you do it”! It increases joint mobility, reduces harmful inflammation, and soothes away knee pain for good! You’ll be pleasantly surprised when you easily kneel to the floor to play with your grand-babies, painlessly squat down in your garden to harvest your zucchini plants or effortlessly rise up off your couch without the slightest irritation in your knees. Your knees will feel young and healthy (like you were 20 years old) and allow you to get a full, restful nights sleep and enjoy zumba class again or gaze upon the early morning sunrise during your 7 am walk without your knees crying back at you.", "image": "ef66c048c6124b0cb8cdc3a04f68dacc.png", "price": 15, "videos": [] }, { "id": "720A691EC5", "name": "Forward Head Posture Fix", "hopLink": "https://9965fludf3mn6wdempyjg9pkb4.hop.clickbank.net/", "description": "\"Forward Head Posture fix\" is the simplest program you can use to instantly improve your posture for greater strength, better health, and energy in less than 15 minutes a day.", "image": "0275bccc8890422f9b8b2c6dd22dfb3e.png", "price": 10, "videos": ["https://www.youtube.com/embed/08-D0CrMIAc", "https://www.youtube.com/embed/3ZEu6ZOMhlw", "https://www.youtube.com/embed/5pWPwCrJzrA", "https://www.youtube.com/embed/5vpdIWORtFw", "https://www.youtube.com/embed/61WbNyN4mh4", "https://www.youtube.com/embed/9AgBFHFINLo", "https://www.youtube.com/embed/9FEm5KVd6Ys", "https://www.youtube.com/embed/a90IsL3Mx9E", "https://www.youtube.com/embed/BbUbyUXjn28", "https://www.youtube.com/embed/BFOW85qndhU", "https://www.youtube.com/embed/EgUGaHwk8PY", "https://www.youtube.com/embed/evzb9uuR4WE", "https://www.youtube.com/embed/F_t8c6UjKhI", "https://www.youtube.com/embed/GA-5b_ITgXE", "https://www.youtube.com/embed/gvAf5fS_GoY", "https://www.youtube.com/embed/jrrCj4CbKUc", "https://www.youtube.com/embed/kZ0fiNRzxWs", "https://www.youtube.com/embed/ojbYWWxLruk", "https://www.youtube.com/embed/Q0XVK3itr8A", "https://www.youtube.com/embed/r3u4fa27oCw", "https://www.youtube.com/embed/refyBLWQrbQ", "https://www.youtube.com/embed/rHI3WapfVlI", "https://www.youtube.com/embed/ToA1A871dkA", "https://www.youtube.com/embed/Tyv7yPcka84", "https://www.youtube.com/embed/XzKFdUweFVc"] }, { "id": "64453968CF", "name": "Hypothyroidism Exercise Revolution", "hopLink": "https://e7146lwgh0-wco21z78foigp7w.hop.clickbank.net/", "description": "This is the most complete, most comprehensive, and only exercise program designed specifically to address and overcome the inherent issues associated with exercise and hypothyroidism. The \"Hypothyroidism Exercise Revolution\" program consists of a 3 phase progressive exercise system designed for people of any age or exercise experience. It covers every aspect of exercise, exercise nutrition, exercise recovery, and even exercise supplementation. Remember, exercising with hypothyroidism is about exercising smarter, not longer or harder. That’s why these workouts are designed to be short yet highly efficient and effective, taking less than 30 minutes, 2 to 3 times per week.", "image": "b41932234f724dcaa4a4a6ca620910e6.png", "price": 37, "videos": [] }, { "id": "254BAAD979", "name": "Isometrics Mass", "hopLink": "https://a9cbab3gc1qyera1uyz4oj6l1u.hop.clickbank.net/", "description": "With \"Isometrics Mass,\" you’ll pack on bulging muscle and superhuman strength without spending hours in the gym or performing dangerous, joint-crushing workouts and it won’t matter your current age or physical shape. \"Isometrics Mass\" will explode your muscle growth faster than you imagined possible and you'll discover 3 little-known isometrics “power breathing” methods that force oxygen and nutrients into your muscles for greater growth. Also, you'll learn how to get the anabolic effects of lifting a 500 lb deadlift without actually doing it, the shock and awe strength trick to ripping a phonebook in two, 3 methods to master unbreakable grip strength and jaw-dropping forearm size, and so much more!", "image": "5fc8a797359e4356999d4456babefa58.png", "price": 9, "videos": [] }, { "id": "5177FB3285", "name": "The Best Bodyweight Exercises You've Never Heard Of", "hopLink": "http://nshack.betteru.hop.clickbank.net/?l=606", "description": "\"The Best Bodyweight Exercises You've Never Heard Of\" is a book about unique and innovative exercises devoted entirely to the bodyweight training. It contains information on 85 new exercises including pictures, videos, tricks for performing them, and common errors to avoid.", "image": "7a7569f7b3b24ae5a691bf9833cf41b6.png", "price": 9, "videos": [] }, { "id": "8E7761151D", "name": "Unlock Your Hip Flexors", "hopLink": "https://330e2gygc7nkay8gnd0epl4wad.hop.clickbank.net/", "description": "\"Unlock Your Hip Flexors\" gives you a practical, easy-to-follow program you can use today for instantly releasing your hip flexors for more strength, better health, and all day energy.", "image": "322dc48f11f040b682e69e36741cc85c.png", "price": 10, "videos": ["https://www.youtube.com/embed/cvOMIlFOrh0", "https://www.youtube.com/embed/fwQCVqaTe-w", "https://www.youtube.com/embed/khki2_NZ-44", "https://www.youtube.com/embed/LnPnYKNMCPo", "https://www.youtube.com/embed/T0Wx3v_JPcU", "https://www.youtube.com/embed/z4JbDQHJ_2M"] }, { "id": "53F26EE7F4", "name": "VFX Body", "hopLink": "https://86b61gwfh-pvcs86rzu9m5mxew.hop.clickbank.net/", "description": "\"VFX Body\" utilizes unique diet and exercise strategies designed to help optimize the female metabolism and facilitate healthy weight loss while accommodating the individual lifestyle, preferences, and demands of everyday women in the modern age. VFX customizes these unique diet and exercise strategies to the woman as an individual based on her current measurements, personal food preferences, schedule, and exercise capabilities in order to help maximize her results. VFX uses custom nutritional software, meal plans, and workout videos as part of a distinct four phase plan to help women experience healthy weight loss.", "image": "9514bc225950494bb4dc216f6146118b.png", "price": 37, "videos": [] }, { "id": "8DADD1056C", "name": "WLC System", "hopLink": "https://0ac37m18g5yqbw293kplzydmb3.hop.clickbank.net/", "description": "This is, without a doubt, the most powerful muscle building and fat burning system in existence because it intelligently finds the best methods that work for you as an individual. The \"WLC System\" is a complete muscle building and fat burning system based on the secret tactics developed over the past decade of diligent experimentation. It is a day-by-day muscle building and fat burning success manual that contains all the information you will ever need to help you quickly replace body fat with lean muscle mass permanently.", "image": "8a629cf7302b457ba3cf195683a167bb.png", "price": 139.95, "videos": [] }, { "id": "628F5EF942", "name": "Armor.1 RFID Blocker", "hopLink": "https://40fb1h43q8xm4oe6y61n8ho3eu.hop.clickbank.net/", "description": "The Armor.1 RFID Blocker protects your information from all RFID scanners and is an essential item when traveling. It's discreet, fits in your wallet, and makes for a great gift idea.", "image": "f2c148af13634260b9256d165706b9d3.jpg", "price": 0, "videos": [] }, { "id": "3EBD9A70E6", "name": "Credit Card Knife", "hopLink": "https://5876amugl5um3u3azbqaq03za1.hop.clickbank.net/", "description": "The Credit Card Knife is a very handy surgical steel blade that is the size of a credit card you can flip open in 1 second flat.", "image": "81843bb49ef448bab3b1634a20ba670a.jpg", "price": 0, "videos": [] }, { "id": "3E207D45E8", "name": "President Donald Trump Collectible Coin", "hopLink": "https://d065ah58calscr8aelttloey09.hop.clickbank.net/", "description": "Are you a proud supporter of President Trump? If so, you'll love this President Donald Trump Collectable Coin. This unique keepsake is a great way to honor the Presidency of the man devoted to \"Make America Great Again!\"", "image": "8c14bbf4e5794a25a58805370e1dccf1.png", "price": 9.99, "videos": [] }, { "id": "255CE1E88A", "name": "Stinger Spy Pen", "hopLink": "https://3bb74fxgl9luak6p8o52xak76u.hop.clickbank.net/", "description": "The Stinger Spy Pen is an incredibly well-engineered piece of equipment, made of solid aircraft grade aluminum and milled to perfection, so that it is incredibly strong and durable, while still performing all the functions of a “normal” pen. It is a devastatingly effective defense tool that only you know you’re carrying. Not only can you use it to stop an attacker dead in his tracks and drop him like a bad habit, but it can also be used as a glass-breaking device in the event that you find yourself trapped in a vehicle, or building and are otherwise unable to escape through the door.", "image": "c20f708a927044289320bfff19b8613b.png", "price": 19.95, "videos": [] }] }]


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
      ]


    });
  }

  hasPricePoint(priceIndices: Array<number>, index: number): boolean {
    return priceIndices.some(x => x == index);
  }


  onPublisherButtonClick() {
    window.location.href = this.product.hoplink;
  }

  onViewAllReviewsClick() {
    this.router.navigate(['/reviews/' + this.product.name]);
  }

}
