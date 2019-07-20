import { AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';


export abstract class ValidationPage extends Page implements AfterViewInit {
  @ViewChild('form', { static: false }) form: NgForm;

  constructor(titleService: Title, metaService: Meta, @Inject(DOCUMENT) document, @Inject(PLATFORM_ID) private platformId: Object) { super(titleService, metaService, document) }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      let interval = window.setInterval(() => {
        if (this.form.controls) {
          Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].valueChanges.subscribe(() => this.form.controls[key].markAsPristine());
          });
          window.clearInterval(interval);
        }
      }, 1);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitData();
    } else {
      Object.keys(this.form.controls).forEach(key => {
        if (!this.form.controls[key].valid) this.form.controls[key].markAsDirty();
      });
    }
  }

  valid(control: NgModel) {
    return control.pristine;
  }

  abstract submitData(): void;
}