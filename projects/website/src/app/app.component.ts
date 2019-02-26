import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading: boolean;

  constructor(public modalService: ModalService, private cookieService: CookieService, private dataService: DataService) { }

  ngOnInit() {
    if (!this.cookieService.check('_session')) {
      this.cookieService.set('_session', '');
      this.dataService.get('api/Customers/Session').subscribe((response) => {
        response;
      });
    }
  }

  ngAfterContentChecked() {
    this.isLoading = this.modalService.loading;
  }
} 