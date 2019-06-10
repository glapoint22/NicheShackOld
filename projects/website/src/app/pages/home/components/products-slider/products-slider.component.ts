import { Component, Input } from '@angular/core';

@Component({
  selector: 'products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent {
  public margin: number = 20;
  public lastPage: boolean = false;
  public translate = 0;
  @Input() caption: string;
  @Input() products;

  public currentIndex = 1;
  public currentTranslation = 0;
  public translations: Array<any> = [{ 'translate': 0, 'index': 0 }];
  public ShowAllProducts: boolean;
  private maxProductsperPage: number = 5;
  private containerWidth: number = 1600;

  onArrowClick(direction: number, productCount: number) {
    if (direction === -1) {
      this.onLeftArrowClick();
    } else {
      this.onRightArrowClick(productCount);
    }
  }

  onRightArrowClick(productCount: number) {
    this.currentIndex++;
    let remainingProducts = productCount - (this.currentIndex * this.maxProductsperPage);

    if (remainingProducts <= 0) this.lastPage = true;

    this.currentTranslation = this.translate = this.containerWidth + this.currentTranslation;
    this.translations.push({ 'translate': this.currentTranslation, 'index': this.currentIndex });
  }

  onLeftArrowClick() {
    this.lastPage = false;
    this.currentTranslation = this.translate = this.translations[this.translations.length - 2].translate;
    this.currentIndex--;
    this.translations.pop();
  }
}
