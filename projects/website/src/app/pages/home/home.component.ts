import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsSlider } from '../../shared/products-slider/products-slider';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productSliders: Array<ProductsSlider>;

  constructor(private dataService: DataService, public modalService: ModalService) { }

  ngOnInit() {
    this.dataService.get('api/Products')
      .subscribe((productSliders: Array<ProductsSlider>) => {
        this.productSliders = productSliders;
      });
  }
}