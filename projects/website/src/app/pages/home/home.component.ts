import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsSlider } from '../../shared/products-slider/products-slider';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { CarouselItem } from './components/carousel/carousel-Item';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Page implements OnInit {
  public productSliders: Array<ProductsSlider>;
  public carouselItems: Array<CarouselItem>;

  constructor(
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document,
    private dataService: DataService,
    public modalService: ModalService) { super(titleService, metaService, document) }

  ngOnInit() {
    this.title = 'What\'s your niche?';
    this.description = 'Online shopping from the largest affiliate marketing site on the planet, promoting items from thousands of companies and individuals.';
    this.image = '/Images/tlou2.jpg';

    super.ngOnInit();

    this.dataService.get('api/Home')
      .subscribe(result => {
        this.productSliders = result.productGroups;
        this.carouselItems = result.carouselItems;
      });
  }
}