import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends Page implements OnInit {

  ngOnInit() {
    this.title = 'Profile';
    this.share = false;
    super.ngOnInit();
  }

}
