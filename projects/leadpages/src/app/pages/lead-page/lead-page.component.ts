import { Component, OnInit, HostListener } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

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
  public pageNotFound: boolean;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private modalService: ModalService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let pageTitle = param.get('leadPage');

      //Get the lead page
      this.dataService.get('api/LeadPages', [{ key: 'pageTitle', value: pageTitle }])
        .subscribe((response: any) => {
          this.leadPage = this.sanitizer.bypassSecurityTrustHtml(response.body.replace(/title="[a-zA-Z0-9-.]+"/g, ''));
          this.modalService.subscriptionForm.leadMagnet = this.leadMagnetTitle = response.title;
          this.modalService.subscriptionForm.nicheId = this.nicheId = response.nicheId;
        },
          () => {
            this.pageNotFound = true;
          });
    })
  }

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (event.target.id === 'button' || (event.target.parentElement && event.target.parentElement.id === 'button')) {
      this.modalService.subscriptionForm.caption = 'Enter your name and email below to get your free ' + this.leadMagnetTitle + '!';
      this.modalService.subscriptionForm.submitButton = 'Yes! I would like my free ' + this.leadMagnetTitle
      this.modalService.subscriptionForm.cancelButton = 'No Thanks';
      this.modalService.subscriptionForm.show = true;
    }
  }
}