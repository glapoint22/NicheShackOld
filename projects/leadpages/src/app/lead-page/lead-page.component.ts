import { Component, OnInit, HostListener } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { LeadPageSubscriptionFormComponent } from 'src/app/components/lead-page-subscription-form/lead-page-subscription-form.component';

@Component({
  selector: 'lead-page',
  templateUrl: './lead-page.component.html',
  styleUrls: ['./lead-page.component.scss']
})
export class LeadPageComponent implements OnInit {
  public leadMagnetTitle: string;
  public nicheId: number;
  public caption: string;
  public leadPage: SafeHtml;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private modalService: ModalService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let pageTitle = param.get('leadPage');

      //Get the lead page
      this.dataService.get('api/LeadPages', [{ key: 'pageTitle', value: pageTitle }])
        .subscribe((response: any) => {
          this.leadPage = this.sanitizer.bypassSecurityTrustHtml(response.body.replace(/title="[a-zA-Z0-9-.]+"/g, ''));
          this.leadMagnetTitle = response.title;
          this.nicheId = response.nicheId;
        });
    })
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (event.target.id === 'button' || (event.target.parentElement && event.target.parentElement.id === 'button')) {
      this.dataService.post('api/Subscriptions', { nicheId: this.nicheId, leadMagnet: this.leadMagnetTitle })
        .subscribe((response: any) => {
          if (response === null) {
            this.modalService.subscriptionForm.caption = 'Enter your name and email below to get your free ' + this.leadMagnetTitle + '!';
            this.modalService.subscriptionForm.submitButton = 'Yes! I would like my free ' + this.leadMagnetTitle
            this.modalService.subscriptionForm.cancelButton = 'No Thanks';
            this.modalService.subscriptionForm.show = true;
          } else {
            let leadPageSubscriptionForm: LeadPageSubscriptionFormComponent = new LeadPageSubscriptionFormComponent(this.modalService, this.router, this.dataService);
            leadPageSubscriptionForm.onResponse(response);
          }
        });
    }
  }
}