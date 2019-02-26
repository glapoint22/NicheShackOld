import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public isExistingCustomer: boolean;
  public customer: string;
  public leadMagnet: string;
  public email: string;
  public hoplink: string;
  public productName: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters = queryParams.get('p');

      this.dataService.get('api/Subscriptions', [{ key: 'parameters', value: parameters }])
        .subscribe((response: any) => {
          response;
        });

    });
  }

}
