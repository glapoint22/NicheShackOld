import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['../validation-page/validation-page.scss']
})
export class CreatePasswordComponent extends ValidationPage implements OnInit {
  public account: any = {}
  public success: boolean;
  public reEnteredPassword: string;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Create New Password';
    this.share = false;
    super.ngOnInit();
  }

  submitData(): void {
    this.success = true;
  }

}
