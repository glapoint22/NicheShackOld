import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../validation-page/validation-page.scss', './sign-in.component.scss']
})
export class SignInComponent extends ValidationPage implements OnInit {
  public account: any = {}
  public isError: boolean;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Sign In';
    this.share = false;
    super.ngOnInit();
  }

  submitData(): void {
    this.isError = true;
    if(!this.isError) this.router.navigate(['']);
  }

  onChange(){

  }

  onCreateAccountClick(){
    this.router.navigate(['/create-account']);
  }

}