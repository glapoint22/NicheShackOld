import { Component, HostListener } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  template: '',
})
export class ModalComponent {
  public modalServiceObject: any;
  public isClosable: boolean;

  constructor(public modalService: ModalService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.close();
      }
    });
  }

  close() {
    if (this.isClosable) this.modalServiceObject.show = false;
  }

  stopPropagation(event): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //Escape
    if (event.code === 'Escape') {
      this.close();
    }
  }
}