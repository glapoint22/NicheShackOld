import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenData } from 'src/app/classes/token-data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public dataService: DataService,
    public authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.dataService.get('api/Account/Init').subscribe((tokenData: TokenData) => {
      if (tokenData) this.authService.setTokenData(tokenData);

    });




    // if (isPlatformBrowser(this.platformId)) {
    //   let tokenData: TokenData = this.authService.getStoredTokenData();

    //   if (tokenData) {
    //     // Check to see if refresh token is expired
    //     if (this.authService.isTokenExpired(tokenData.refreshTokenExpires)) {
    //       // Refresh token is expired, so remove all token data.
    //       // Customer will have to sign in to access any account info
    //       this.authService.removeTokenData();
    //       this.authService.safeToRunApp = true;
    //     } else {
    //       // Check to see if token has expired. If not expired, flag that it safe to run the app
    //       if (!this.authService.isTokenExpired(tokenData.tokenExpires)) {
    //         this.authService.safeToRunApp = true;
    //       }

    //       this.authService.updateTokenData(tokenData);
    //       this.authService.startTokenRefreshTimer();
    //     }
    //   } else {
    //     // There is no token data so just start the app
    //     this.authService.safeToRunApp = true;
    //   }
    // }else{
    //   this.authService.safeToRunApp = true;
    // }
  }
} 