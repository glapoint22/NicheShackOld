import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/services/data/data.service';

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


    if (!window['fbAsyncInit']) {
      window['fbAsyncInit'] = function () {
          window['FB'].init({
              appId: '167320040479385',
              autoLogAppEvents: true,
              xfbml: true,
              version: 'v3.0'
          });


          // window['FB'].ui({
          //   method: 'share',
          //   href: 'https://developers.facebook.com/docs/',
          // }, function (response) { });

      };
  }

  // load facebook sdk if required
  const url = 'https://connect.facebook.net/en_US/sdk.js';
  if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
  }




  }
} 