import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public videoPlayer: any = {};
  public loading: boolean;
  public subscriptionForm: any = {};
  public error: boolean;
  public pageNotFound: boolean;
  public isHoplink: boolean;
}
