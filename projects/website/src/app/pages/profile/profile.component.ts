import { Component, OnInit, Inject } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthSubject } from 'src/app/classes/auth-subject';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends Page implements OnInit {
  public hasChanges: boolean;
  public subject: AuthSubject = new AuthSubject();

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private router: Router,
    private dataService: DataService,
    public authService: AuthService) {
    super(titleService, metaService, document);
  }

  ngOnInit() {
    this.title = 'Profile';
    this.share = false;
    super.ngOnInit();

    this.hasChanges = this.dataService.data.hasChanges;
    this.dataService.data = {};
    
    this.authService.subject.subscribe((subject: AuthSubject)=>{
      this.subject = subject;
    });
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}