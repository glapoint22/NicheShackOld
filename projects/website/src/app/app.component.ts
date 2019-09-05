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
    // Check to see if the customer is signed in
    this.authService.isSignedIn
      .subscribe((isSignedIn: Boolean) => {
        // If the customer is signed in and this is the browser, start the timer to refresh the token
        if (isSignedIn && isPlatformBrowser(this.platformId)) {
          this.authService.startTokenRefreshTimer();
        }
      });
  }
} 