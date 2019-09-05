import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Customer } from 'src/app/classes/customer';

@Component({
  selector: 'change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['../validation-page/validation-page.scss']
})
export class ChangeNameComponent extends ValidationPage implements OnInit {
  public customer: Customer = new Customer();

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router,
    private dataService: DataService,
    public authService: AuthService
  ) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Change Name';
    this.share = false;
    super.ngOnInit();

    this.authService.customer
      .subscribe((customer: Customer) => {
        this.customer.firstName = customer.firstName;
        this.customer.lastName = customer.lastName;
      });
  }


  submitData(): void {
    this.dataService.put('api/Account/UpdateName', this.customer)
      .subscribe((customer: Customer) => {
        this.authService.updateCustomer(customer);
        this.dataService.data.hasChanges = true;
        this.router.navigate(['account', 'profile']);
      },
        error => {
          if (error.status == 401) {
            this.authService.signOut();
            this.router.navigate(['sign-in']);
          }
        });

  }
}