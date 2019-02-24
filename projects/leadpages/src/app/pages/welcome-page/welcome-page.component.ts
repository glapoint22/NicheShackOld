import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public pageNotFound: boolean;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    if(!this.dataService.data.customer) this.pageNotFound = true;
  }

}
