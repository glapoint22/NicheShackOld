import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['../validation-page/validation-page.scss']
})
export class ChangeNameComponent extends ValidationPage implements OnInit {
  public account: any;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    private router: Router,
    private dataService: DataService) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Change Name';
    this.share = false;
    super.ngOnInit();

    this.account = {
      firstName: 'Gabe',
      lastName: 'LaPoint'
    }
  }

  submitData(): void {
    this.dataService.data.hasChanges = true;
    this.router.navigate(['account', 'profile']);
  }
}