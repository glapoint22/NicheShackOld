import { AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';


export abstract class ValidationBase implements AfterViewInit {
  @ViewChild('form', { static: false }) form: NgForm;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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