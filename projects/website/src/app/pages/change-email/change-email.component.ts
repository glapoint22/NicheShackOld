import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Customer } from 'src/app/classes/customer';

@Component({
  selector: 'change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['../validation-page/validation-page.scss', './change-email.component.scss']
})
export class ChangeEmailComponent extends ValidationPage implements OnInit {
  public oldEmail: string;
  public newEmail: string;
  public reEnteredEmail: string;
  public errors: Array<any> = [];


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
    this.title = 'Change Email';
    this.share = false;
    super.ngOnInit();

    this.authService.customer.subscribe((customer: Customer) => {
      this.oldEmail = customer.email;
    });

  }

  onSubmit() {
    if (this.form.controls['oldEmail'].value == this.form.controls['newEmail'].value) {
      this.form.controls['newEmail'].setErrors({ oldEmailMatch: true })
    }
    super.onSubmit();
  }

  submitData(): void {
    this.dataService.put('api/Account/UpdateEmail', { email: this.newEmail })
      .subscribe((customer: Customer) => {
        this.authService.updateCustomer(customer);
        this.dataService.data.hasChanges = true;
        this.router.navigate(['account', 'profile']);
      },
        error => {
          if (error.status == 401) {
            this.authService.signOut();
            this.router.navigate(['sign-in']);
          } else if (error.status == 409) {
            this.errors = [];
            Object.keys(error.error).forEach(key => {
              this.errors.push(error.error[key][0])
            });
          }
        });
  }
}
