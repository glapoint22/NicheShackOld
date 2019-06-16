import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoading: boolean;
  public error: boolean;
  public subscriptionForm: any;
  
  constructor(private modalService: ModalService){}

  // ngAfterContentChecked() {
  //   this.isLoading = this.modalService.loading;
  //   this.error = this.modalService.error;
  //   this.subscriptionForm = this.modalService.subscriptionForm;
  // }
}
