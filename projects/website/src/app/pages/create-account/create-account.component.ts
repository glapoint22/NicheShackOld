import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['../validation-page/validation-page.scss', './create-account.component.scss']
})
export class CreateAccountComponent extends ValidationPage implements OnInit {
  public account: any = {}
  public reEnteredPassword: string;
  public errors: Array<any> = [];

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router,
    private dataService: DataService
  ) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Create Account';
    this.share = false;
    super.ngOnInit();
  }

  submitData(): void {
    this.dataService.post('api/Account/Register', this.account)
      .subscribe(response => {
      },
      response => {
        this.errors = [];
        Object.keys(response.error).forEach(key => {
          this.errors.push(response.error[key][0])
        });
      });
  }

  onSignInClick() {
    this.router.navigate(['/sign-in']);
  }

}
