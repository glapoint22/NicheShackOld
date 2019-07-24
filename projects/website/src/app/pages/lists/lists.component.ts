import { Component, OnInit, Inject } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SharePage } from '../share-page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent extends SharePage implements OnInit {
  public sortOptions: Array<any>;
  public selectedSortOption: any = {};
  public listName: string = 'Christmas List';
  public description: string = 'This is the best list in the whole entire world!';
  public collaborators = [
    {
      customerId: 'F6HJ8E9GOQ',
      name: 'Gabe LaPoint'
    },
    {
      customerId: '9OWJP1TKDT',
      name: 'Zorioth'
    },
    {
      customerId: 'I6SG0PWGMA',
      name: 'Nightah'
    },
    {
      customerId: 'TS472G9MQF',
      name: 'Gabey Gump'
    }
  ]
  public viewListId: string = '36d247421e654d87bd627c';
  public collaborateListId: string = '1SRHA3LjXDYIRHbXcGx24D';
  public ownerName: string;
  public owner: boolean = true;

  public lists: Array<any> = [
    {
      name: 'Christmas List',
      description: 'This is the best list in the whole entire world!',
      totalItems: 2,
      selected: true,
      ownerName: ''
    },
    {
      name: 'Wish List',
      description: 'These are the items I wish I could get',
      totalItems: 1,
      selected: false,
      ownerName: ''
    },
    {
      name: 'Favorites',
      description: 'These items are awesome!',
      totalItems: 10,
      selected: false,
      ownerName: 'Zorioth'
    }
  ];
  public products: Array<any> = [
    {
      title: 'Isometrics Mass',
      rating: 3,
      totalReviews: 222,
      minPrice: 10,
      maxPrice: 0,
      dateAdded: 'June 3, 2019',
      hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
      urlTitle: 'fat-loss-activation'
    },
    {
      title: 'Muscle Building 101',
      rating: 5,
      totalReviews: 12,
      minPrice: 13.58,
      maxPrice: 20.22,
      dateAdded: 'July 13, 2019',
      hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
      urlTitle: 'fat-loss-activation'
    }
  ];

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    public modalService: ModalService,
    private router: Router) { super(titleService, metaService, document) }

  ngOnInit() {
    if (this.title == undefined) {
      this.title = 'Your Lists';
      this.share = false;
    }

    this.sortOptions = [
      {
        name: 'Added Date',
        value: 'added'
      },
      {
        name: 'Price: Low to High',
        value: 'price-asc'
      },
      {
        name: 'Price: High to Low',
        value: 'price-desc'
      },
      {
        name: 'Name',
        value: 'name'
      },
      {
        name: 'Rating',
        value: 'rating'
      }
    ];

    this.selectedSortOption = this.sortOptions[0];
    super.ngOnInit();
  }


  setSort() {

  }

  onItemClick(urlTitle: string) {
    this.router.navigate([urlTitle]);
  }

  onShareClick(share: any) {
    let pathName: string;
    let text: string;

    if (share.type === 'Collaborate') {
      pathName = '/lists/collaborate/' + this.collaborateListId;
      text = 'You\'re invited to help me with my list at NicheShack.com!';
    } else {
      pathName = '/lists/view/' + this.viewListId;
      text = 'Check out my list at NicheShack.com!';
    }

    switch (share.action) {
      case 'Facebook':
        this.onFacebookClick(pathName, text);
        break;

      case 'Twitter':
        this.onTwitterClick(pathName, text);
        break;

      case 'Link':
        let copyText: any = document.getElementById("copy");

        copyText.value = this.domain + pathName;
        copyText.select();
        document.execCommand("copy");
    }
  }

  onPublisherButtonClick(product) {
    window.location.href = product.hoplink;
  }
}