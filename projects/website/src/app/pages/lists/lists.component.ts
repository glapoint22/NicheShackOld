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
    // Set the page properties
    if (this.title == undefined) {
      this.title = 'Your Lists';
      this.share = false;
    }

    super.ngOnInit();


    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      let parameters: Array<any> = [];

      if (this.lists.length == 0) {

        // Get the data from the list resolver
        this.setListData(this.route.snapshot.data['listData']);

      } else {

        //Set the parameters array from the query params
        for (let i = 0; i < queryParams.keys.length; i++) {
          parameters.push({ key: queryParams.keys[i], value: queryParams.get(queryParams.keys[i]) });
        }

        // Get the list data
        this.dataService
          .get('api/Lists', parameters)
          .subscribe(listData => {
            this.setListData(listData);
          });
      }
    })
  }

  setListData(listData) {
    this.lists = listData.lists;
    this.selectedList = this.lists.find(x => x.selected);

    this.products = listData.products;
    this.collaborators = listData.collaborators;
    this.isOwner = listData.isOwner;
    this.isCollaborator = listData.isCollaborator;
    this.ownerName = listData.ownerName;

    this.sortOptions = listData.sortOptions;
    let index = Math.max(0, this.sortOptions.findIndex(x => x.value == this.route.snapshot.queryParams.sort));
    this.selectedSortOption = this.sortOptions[index];
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
    let onCloseSubscription: Subscription = this.modalService.createList.onClose.subscribe((response: any) => {
      onCloseSubscription.unsubscribe();
      if (response.submitted) {
        this.router.navigate(['account', 'lists'], { queryParams: { listId: response.listId } });
      }
    });
  }

  getMoveToList() {
    return this.lists.filter(x => !x.selected);
  }
}