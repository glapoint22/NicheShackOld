import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public error: boolean;

  constructor(private modalService: ModalService){}

  ngAfterContentChecked() {
    this.error = this.modalService.error;
  }
}
