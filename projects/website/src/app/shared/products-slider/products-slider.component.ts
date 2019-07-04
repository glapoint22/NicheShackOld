import { Component, Input, HostListener } from '@angular/core';
import { DisplayProduct } from '../product/display-product';

@Component({
  selector: 'products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent {
  public margin: number = 20;
  public lastPage: boolean = false;
  public ShowAllProducts: boolean;
  @Input() caption: string;
  @Input() products: Array<DisplayProduct>;

  public translate: number = 0;
  private currentPage: number = 1;
  private currentTranslation: number = 0;
  private translations: Array<number> = [this.currentTranslation];
  private productWidth: number = 300;

  onArrowClick(direction: number, productCount: number, containerWidth: number) {
    // Execute the correct arrow function based on the direction
    if (direction === -1) {
      this.onLeftArrowClick();
    } else {
      this.onRightArrowClick(productCount, containerWidth);
    }
  }

  onRightArrowClick(productCount: number, containerWidth: number) {
    // Increment the page
    this.currentPage++;

    // Calculate how many products should be on each page
    let productsPerPage = (containerWidth + this.margin) / (this.productWidth + this.margin);

    // Calculate the remaining products based on the current page and how many products per page
    let remainingProducts = productCount - (this.currentPage * productsPerPage);

    // See if we are on the last page
    if (remainingProducts <= 0) this.lastPage = true;

    // Calculate how much to move the slider
    this.currentTranslation = this.translate = containerWidth + this.margin + this.currentTranslation;
    this.translations.push(this.currentTranslation);
  }

  onLeftArrowClick() {
    // We are not on the last page anymore
    this.lastPage = false;

    // Get the previous translation from the array to move the slider back
    this.currentTranslation = this.translate = this.translations[this.translations.length - 2];
    this.currentPage--;
    this.translations.pop();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    // Reset properties
    this.translate = 0;
    this.currentPage = 1;
    this.currentTranslation = 0;
    this.translations = [this.currentTranslation];
    this.lastPage = false;
    this.ShowAllProducts = false;
  }
}
