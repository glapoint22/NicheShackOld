import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/services/data/data.service';
import { Router, NavigationEnd, NavigationStart, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cookieService: CookieService, private dataService: DataService) { }

  ngOnInit() {
    if (!this.cookieService.check('_session')) {
      this.cookieService.set('_session', '');
      this.dataService.get('api/Customers/Session').subscribe((response) => {
        response;
      });
    }
  }
} 