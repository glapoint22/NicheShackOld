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
  public serializedCustomerId;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters = queryParams.get('p');

      this.dataService.get('api/Subscriptions/Content', [{ key: 'parameters', value: parameters }])
        .subscribe((response: any) => {
          this.isExistingCustomer = response.isExistingCustomer;
          this.customer = response.customerName;
          this.leadMagnet = response.leadMagnet;
          this.email = response.email;
          this.hoplink = response.hoplink + (response.hoplink.indexOf('?') === -1 ? '?' : '&') + 'tid=' + response.customerId + response.productId;
          this.productName = response.productName;
          this.serializedCustomerId = encodeURIComponent(response.serializedCustomerId);
        });

    });
  }

}
