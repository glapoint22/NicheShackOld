import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['../validation-page/validation-page.scss']
})
export class ChangePasswordComponent extends ValidationPage implements OnInit {
  public currentPassword: string;
  public newPassword: string;
  public reEnteredPassword: string;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    @Inject(PLATFORM_ID) platformId: Object,
    private router: Router,
    private dataService: DataService) { super(titleService, metaService, document, platformId); }

  ngOnInit() {
    this.title = 'Change Password';
    this.share = false;
    super.ngOnInit();
  }

  submitData(): void {
    // If password is incorrect
    // this.form.controls['currentPassword'].setErrors({incorrectPassword: true});
    // this.onSubmit();
    this.dataService.data.hasChanges = true;
    this.router.navigate(['account', 'profile']);
  }
}