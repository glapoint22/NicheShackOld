import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SharePage } from '../share-page';
import { Router, Route, ParamMap, ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

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
  public isOwner: boolean;
  public isCollaborator: boolean;
  public lists: Array<any> = [];
  public products: Array<any> = [];
  public collaborators = [];
  public selectedList: any = {};

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    public modalService: ModalService,
    private dataService: DataService,
    private route: ActivatedRoute,
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



    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      this.dataService
      .get('api/Lists', [{key: 'listId', value: queryParams.get('listId')}])
      .subscribe(response => {
        this.lists = response.lists;
        this.selectedList = this.lists.find(x => x.selected);

        this.products = response.products;
        this.collaborators = response.collaborators;
        this.isOwner = response.isOwner;
        this.isCollaborator = response.isCollaborator;
        this.ownerName = this.selectedList.owner;
      });
    })

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
      pathName = '/lists/collaborate/' + this.selectedList.collaborateId;
      text = 'You\'re invited to help me with my list at NicheShack.com!';
    } else {
      pathName = '/lists/view/' + this.selectedList.id;
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
      this.router.navigate(['account/lists'], { queryParams: { 'listId': list.id } });
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

  getMoveToList() {
    return this.lists.filter(x => !x.selected);
  }
}