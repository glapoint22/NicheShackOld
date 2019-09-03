import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthSubject } from 'src/app/classes/auth-subject';

@Component({
  selector: 'change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['../validation-page/validation-page.scss']
})
export class ChangeNameComponent extends ValidationPage implements OnInit {
  public subject: AuthSubject = new AuthSubject();

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

    this.authService.subject
      .subscribe((subject: AuthSubject)=>{
        this.subject.firstName = subject.firstName;
        this.subject.lastName = subject.lastName;
      });
  }


  submitData(): void {
    this.dataService.put('api/Account/UpdateName', this.subject)
      .subscribe((subject: AuthSubject) => {
        this.authService.updateSubject(subject);
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