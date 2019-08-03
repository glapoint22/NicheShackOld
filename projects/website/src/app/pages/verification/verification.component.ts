import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'verification',
  templateUrl: './verification.component.html',
  styleUrls: ['../validation-page/validation-page.scss', './verification.component.scss']
})
export class VerificationComponent extends ValidationPage implements OnInit {
  public code: string;
  public email: string;
  public isError: boolean;
  public resend: boolean;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Verification';
    this.share = false;
    super.ngOnInit();

    this.email = 'glapoint22@gmail.com';
  }

  submitData(): void {
    this.isError = true;
    this.resend = false;
  }

  onResendCodeClick(){
    this.resend = true;
    this.isError = false;
  }
}