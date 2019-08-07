import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SharePage } from '../share-page';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent extends SharePage implements OnInit {
  public event = new Subject<void>();
  public sortOptions: Array<any>;
  public selectedSortOption: any = {};
  public ownerName: string;
  public isOwner: boolean = true;
  public isCollaborator: boolean = false;;



  public listId: string = '36d247421e654d87bd627c';
  public listName: string = 'Christmas List';
  public listDescription: string = 'This is the best list in the whole entire world!';
  public collaborateListId: string = '1SRHA3LjXDYIRHbXcGx24D';
  
  
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
  
  
  

  public lists: Array<any> = [
    {
      id: 'f5tyujhde4ujkiosdr3j0s',
      name: 'Christmas List',
      description: 'This is the best list in the whole entire world!',
      totalItems: 2,
      selected: true,
      ownerName: ''
    },
    {
      id: 'tyhd4t7uij9okge4rfgyt6',
      name: 'Wish List',
      description: 'These are the items I wish I could get',
      totalItems: 1,
      selected: false,
      ownerName: ''
    },
    {
      id: '35th8io0ohui03hs678j9k',
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
      collaborator: '',
      hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
      urlTitle: 'fat-loss-activation',
      deleted: false,
      movedToList: null
    },
    {
      title: 'Muscle Building 101',
      rating: 5,
      totalReviews: 12,
      minPrice: 13.58,
      maxPrice: 20.22,
      dateAdded: 'July 13, 2019',
      collaborator: 'Zorioth',
      hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png',
      urlTitle: 'fat-loss-activation',
      deleted: false,
      movedToList: null
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
    this.router.navigate([location.pathname], {
      queryParams: { 'sort': this.selectedSortOption.value },
      queryParamsHandling: 'merge'
    });
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
      pathName = '/lists/view/' + this.listId;
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

  onListClick(list) {
    if (!list.selected) {
      this.router.navigate(['lists/' + list.id]);
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMousedown() {
    this.event.next();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(keydownEvent) {
    if (keydownEvent.code === 'Escape' || keydownEvent.keyCode === 27) {
      this.event.next();
    }
  }


  onMoveProduct(list: any, product: any) {
    product.movedToList = list;

    // Update database!
  }

  onDelete(product: any) {
    product.deleted = true;
  }

  undo(action: string, product: any) {
    if (action == 'deleted') {
      product.deleted = false;
      // Update database
    } else {
      product.movedToList = null;
      // Update database
    }
  }

  onCreateListClick() {
    this.modalService.createList.show = true;
    let onCloseSubscription: Subscription = this.modalService.createList.onClose.subscribe((newList: any) => {
      onCloseSubscription.unsubscribe();
      if (newList.listName) {
        // Make a post request to the database and get the list id from the response
        let listId = 'foofoofoofoo'
        this.router.navigate(['lists/' + listId]);
      }
    });
  }

  getMoveToList(){
    return this.lists.filter(x => !x.selected);
  }
}