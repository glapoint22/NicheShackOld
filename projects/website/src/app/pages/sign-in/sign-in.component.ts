import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenData } from 'src/app/classes/token-data';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../validation-page/validation-page.scss', './sign-in.component.scss']
})
export class SignInComponent extends ValidationPage implements OnInit {
  public account: any = {}
  public isError: boolean;
  private redirectUrl: string;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router,
    private dataService: DataService,
    private authService: AuthService) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Sign In';
    this.share = false;
    this.redirectUrl = this.authService.redirectUrl;
    this.account.isPersistent = true;
    super.ngOnInit();
  }

  submitData(): void {
    this.dataService.post('api/Account/SignIn', this.account)
      .subscribe((tokenData: TokenData) => {
        this.authService.setTokenData(tokenData);
        this.authService.startTokenRefreshTimer();
        
        this.router.navigate([this.redirectUrl]);
      },
        error => {
          if (error.status == 401) this.isError = true;
        });
  }

  

  onCreateAccountClick() {
    this.router.navigate(['/create-account']);
  }

}
