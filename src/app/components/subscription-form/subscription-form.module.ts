import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionFormComponent } from './subscription-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubscriptionFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SubscriptionFormComponent]
})
export class SubscriptionFormModule { }
