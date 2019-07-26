import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'collaborate-list',
  templateUrl: './collaborate-list.component.html',
  styleUrls: ['./collaborate-list.component.scss']
})
export class CollaborateListComponent extends Page implements OnInit {

  constructor(titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) {
    super(titleService, metaService, document);
  }

  ngOnInit() {
    let ownerName = 'Gabe';
    let listId = 'q7oku8gp16dhyoqr7of5od';
    this.title = ownerName + '\'s List';
    this.description = 'Help with ' + ownerName + '\'s list at NicheShack.com!';
    this.image = '/assets/List.png';
    super.ngOnInit();
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate(['lists/' + listId]);
    }
  }
}