import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthSubject } from 'src/app/classes/auth-subject';

@Component({
  selector: 'change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['../validation-page/validation-page.scss', './change-email.component.scss']
})
export class ChangeEmailComponent extends ValidationPage implements OnInit {
  public newEmail: string;
  public oldEmail: string
  public reEnteredEmail: string;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    public router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) {
    super(titleService, metaService, document, platformId);
  }

  ngOnInit() {
    this.title = 'Change Email';
    this.share = false;
    super.ngOnInit();

    this.oldEmail = this.authService.subject.email;
     
  }

  onSubmit() {
    if (this.form.controls['oldEmail'].value == this.form.controls['newEmail'].value) {
      this.form.controls['newEmail'].setErrors({ oldEmailMatch: true })
    }
    super.onSubmit();
  }

  submitData(): void {
    this.dataService.put('api/Account/UpdateEmail', {oldEmail: this.oldEmail, newEmail: this.newEmail})
      .subscribe((subject: AuthSubject) => {
        this.authService.updateSubject(subject);
        this.dataService.data.hasChanges = true;
        this.router.navigate(['account', 'profile']);
      },
      error => {
        if(error.status == 401){
          this.authService.removeTokenData();
          this.router.navigate(['sign-in']);
        }
      });
  }
}
