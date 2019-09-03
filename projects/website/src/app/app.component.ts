import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
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
    // Wanted to make this a get request but for some reason get doesn't work so I changed it to post
      .post('api/Account/Refresh',{})
      .subscribe((response: any) => {
        if (response) {
          this.authService.tokenExpiration = response.tokenExpiration;
          if (isPlatformBrowser(this.platformId)) {
            this.authService.startTokenRefreshTimer();
          }
        }
      });
  }
} 