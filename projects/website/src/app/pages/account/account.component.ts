import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends Page implements OnInit {

  ngOnInit() {
    this.title = 'Your Account';
    this.share = false;
    super.ngOnInit();
  }
}