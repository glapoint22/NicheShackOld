import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadPageSubscriptionFormComponent } from './lead-page-subscription-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LeadPageSubscriptionFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LeadPageSubscriptionFormComponent]
})
export class LeadPageSubscriptionFormModule { }
