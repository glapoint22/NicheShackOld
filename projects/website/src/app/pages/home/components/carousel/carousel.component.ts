import { Component, OnChanges, Input } from '@angular/core';
import { CarouselItem } from './carousel-Item';
import { Router } from '@angular/router';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges {
  @Input() carouselItems: Array<CarouselItem>;
  public interval: number = 0;
  public currentDirection = -1;
  public iterations: number = 1;
  public defaultSpeed: number = 0.3;
  public arrowClicked: boolean = false;
  public translate = 0;
  public index: number = 0;
  public play: boolean = true;
  public curve: string = 'ease-in-out';
  public speed: number = this.defaultSpeed;


  constructor(private router: Router){}

  ngOnChanges() {
    // If there are carousel items
    if (this.carouselItems && this.carouselItems.length > 0) {
      for (let i = 0; i < this.carouselItems.length; i++) {
        this.carouselItems[i].position = i * 100;
      }

      //Start the timer
      this.startTimer(this.currentDirection);
    }
  }

  onClick(url) {
    this.router.navigate([url]);
  }

  moveSlider(direction: number) {
    //Move the slider based on the direction passed in
    this.translate += 100 * direction;

    //Get the current and next image index
    this.index = this.getIndex(this.translate);
    let nextIndex = this.getIndex(this.translate + 100 * direction);

    //Change the position of the images so it creates a continous loop
    if (this.carouselItems[nextIndex].position < this.carouselItems[this.index].position) {
      this.carouselItems[this.findIndex(direction)].position = this.getPosition(direction) - 100 * direction;
    }
  }

  getIndex(translate): number {
    let index = (Math.abs(translate) / 100) % this.carouselItems.length;
    if (translate > 0 && index != 0) {
      index = this.carouselItems.length - index;
    }
    return index;
  }

  getPosition(direction: number) {
    let minPos = Number.POSITIVE_INFINITY;
    let maxPos = Number.NEGATIVE_INFINITY;
    let pos: number;

    //Get either the min or max position from the images based on the direction passed in
    for (let i = 0; i < this.carouselItems.length; i++) {
      if (direction === -1) {
        pos = maxPos = Math.max(maxPos, this.carouselItems[i].position);
      } else {
        pos = minPos = Math.min(minPos, this.carouselItems[i].position);
      }
    }
    return pos;
  }

  findIndex(direction: number) {
    //Find the index of the image that will be shifting
    return this.carouselItems.findIndex(x => x.position === this.getPosition(-direction));
  }

  onArrowClick(direction: number) {
    if (!this.arrowClicked) {
      this.arrowClicked = true;
      this.nextImage(-direction);
    } else {
      this.iterations += 1;
    }
  }

  startTimer(direction: number): void {
    this.interval = window.setInterval(() => {
      this.moveSlider(direction);
    }, 5000);
  }

  onPlayClick() {
    this.play = !this.play;

    if (!this.play) {
      //Stop the timer
      window.clearInterval(this.interval);
    } else {
      this.moveSlider(this.currentDirection);
      this.startTimer(this.currentDirection);
    }
  }

  onPaginatorClick(page: number) {
    let offset = this.index - page;
    this.currentDirection = Math.sign(offset);
    this.iterations = Math.abs(offset);
    this.speed = this.defaultSpeed / this.iterations;

    if (this.iterations > 1) {
      this.curve = 'linear'
    } else {
      this.curve = 'ease-in-out';
    }

    this.nextImage(this.currentDirection);
  }



  nextImage(direction: number) {
    //Stop the timer
    window.clearInterval(this.interval);

    this.currentDirection = direction;

    //Go to the next image and restart the timer
    this.moveSlider(direction);
    if (this.play) this.startTimer(direction);
  }



  transitionEnd() {
    if (this.iterations > 1) {
      this.iterations -= 1;
      this.curve = 'linear';
      this.nextImage(this.currentDirection);
    } else {
      this.curve = 'ease-in-out';
      this.arrowClicked = false;
    }
    this.speed = this.defaultSpeed / this.iterations;
  }
}
