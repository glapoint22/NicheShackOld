import { Component, OnInit } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../validation-page/validation-page.scss']
})
export class ContactComponent extends ValidationPage implements OnInit {
  public sender: any = {}
  public submitted: boolean;

  ngOnInit() {
    this.title = 'Contact Us';
    this.description = 'Online shopping from the largest affiliate marketing site on the planet, promoting items from thousands of companies and individuals.';
    this.image = '/Images/tlou2.jpg';
    super.ngOnInit();
  }

  submitData(): void {
    this.submitted = true;
  }

}
