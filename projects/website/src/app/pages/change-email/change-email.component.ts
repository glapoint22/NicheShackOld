import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ValidationPage } from '../validation-page/Validation-page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

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
    @Inject(PLATFORM_ID) platformId: Object) { super(titleService, metaService, document, platformId); }

  ngOnInit() {
    this.title = 'Change Email';
    this.share = false;
    super.ngOnInit();

    this.oldEmail = 'glapoint22@gmail.com';
    this.newEmail = 'glapoint22@gmail.com';
  }

  onSubmit(){
    if(this.form.controls['oldEmail'].value == this.form.controls['newEmail'].value){
      this.form.controls['newEmail'].setErrors({ oldEmailMatch: true })
    }
    super.onSubmit();
  }

  submitData(): void {
    
  }
}
