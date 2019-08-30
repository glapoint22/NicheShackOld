import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenData } from 'src/app/classes/token-data';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../validation-page/validation-page.scss', './sign-in.component.scss']
})
export class SignInComponent extends ValidationPage implements OnInit {
  public account: any = {}
  public isError: boolean;
  public keepSignedIn: boolean = true;
  private redirectUrl: string;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router,
    private dataService: DataService,
    private authService: AuthService,
    private cookieService: CookieService) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Sign In';
    this.share = false;
    this.redirectUrl = this.authService.redirectUrl;
    super.ngOnInit();
  }

  submitData(): void {
    this.dataService.post('api/Account/SignIn', this.account)
      .subscribe((tokenData: TokenData) => {
        this.cookieService.set('auth', tokenData.token, 1);

        // Update the auth token with the new token data and start the countdown for the next refresh of the token
        this.authService.updateTokenData(tokenData, this.keepSignedIn)
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
