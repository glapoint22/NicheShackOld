import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({ template: '' })

export abstract class ValidationFormComponent implements AfterViewInit {
  @ViewChild('form') form: NgForm;

  ngAfterViewInit() {
    let interval = window.setInterval(() => {
      if (this.form.controls) {
        Object.keys(this.form.controls).forEach(key => {
          this.form.controls[key].valueChanges.subscribe(() => this.form.controls[key].markAsPristine());
        });
        window.clearInterval(interval);
      }
    }, 1);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitData();
    } else {
      Object.keys(this.form.controls).forEach(key => {
        if (!form.controls[key].valid) form.controls[key].markAsDirty();
      });
    }
  }

  notValid(control: NgModel) {
    return !control.valid && control.dirty;
  }

  abstract submitData(): void
}