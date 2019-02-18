import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productSliders;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get('api/Products')
      .subscribe((response: any) => {
        this.productSliders = response;
      });
  }
}
