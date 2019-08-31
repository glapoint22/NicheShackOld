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
    this.dataService
      .get('api/Account/Init')
      .subscribe((tokenData: TokenData) => {
        if (tokenData) {
          this.authService.setTokenData(tokenData);
          if (isPlatformBrowser(this.platformId)) {
            this.authService.startTokenRefreshTimer();
          }
        }
      });
  }
} 