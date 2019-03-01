import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  public html: SafeHtml;

  constructor(private dataService: DataService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let id = queryParams.get('id');

      this.dataService.get('api/Mail', [{ key: 'id', value: id }])
        .subscribe((response: any) => {
          this.html = this.sanitizer.bypassSecurityTrustHtml(response);
        });
    });
  }
}