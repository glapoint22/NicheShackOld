import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends Page implements OnInit {
  ngOnInit() {
    this.title = 'About Us';
    this.description = 'Welcome to Niche Shack, your number one source for all things in your niche. We are the largest affiliate marketing site on the planet, promoting items from thousands of companies and individuals.'
    this.image = '/Images/tlou2.jpg';

    super.ngOnInit();
  }
}