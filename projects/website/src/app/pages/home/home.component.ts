import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productSliders;

  constructor(private dataService: DataService, public modalService: ModalService) { }

  ngOnInit() {
    this.dataService.get('api/Products')
      .subscribe((response: any) => {
        this.productSliders = response;
      });
  }
}
