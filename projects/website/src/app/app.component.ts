import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoading: boolean;

  constructor(public modalService: ModalService) { }

  ngAfterContentChecked() {
    this.isLoading = this.modalService.loading;
  }
} 