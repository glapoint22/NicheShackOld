import { Component, HostListener } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  template: '',
})
export class ModalComponent {
  public modalServiceObject: any;

  constructor(public modalService: ModalService, public router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.modalServiceObject.show = false;
      }
    });
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
      document.body.style.overflow = 'visible';
  }

  close() {
    this.modalServiceObject.show = false;
  }

  stopPropagation(event): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //Escape
    if (event.code === 'Escape' || event.keyCode === 27) {
      this.close();
    }
  }
}