import { Injectable } from '@angular/core';
import { AuthSubject } from 'src/app/classes/auth-subject';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public tokenExpiration: string;

  // Subject
  private _subject: AuthSubject;
  public subject = new Observable<AuthSubject>(observer => {
    if (this._subject) {
      observer.next(this._subject);
      observer.complete();
    } else {
      this.dataService
        .get('api/Account/GetSubject')
        .subscribe((subject: AuthSubject) => {
          this._subject = subject;
          observer.next(subject);
          observer.complete();
        });
    }
  });



  // redirectUrl
  private _redirectUrl: string;
  public get redirectUrl(): string {
    let url: string;

    if (!this._redirectUrl) {
      url = ''
    } else {
      url = this._redirectUrl;
      this._redirectUrl = null;
    }

    return url;
  }
  public set redirectUrl(v: string) {
    this._redirectUrl = v;
  }

  // Token Refresh Timer Handle
  private tokenRefreshTimerHandle: number;


  constructor(private dataService: DataService) { }


  public signOut() {
    window.clearTimeout(this.tokenRefreshTimerHandle);
    this.dataService.get('api/Account/SignOut').subscribe(() => { });
    this._subject = null;
  }

  public updateSubject(subject: AuthSubject) {
    this._subject = subject;
  }


  public startTokenRefreshTimer() {
    let milliseconds = new Date(this.tokenExpiration).valueOf() - new Date().valueOf();

    this.tokenRefreshTimerHandle = window.setTimeout(() => {
      // Wanted to make this a get request but for some reason get doesn't work so I changed it to post
      this.dataService.post('api/Account/Refresh', {})
        .subscribe((response: any) => {
          if (response) {
            // Update the token data and restart the refresh timer
            this.tokenExpiration = response.tokenExpiration;
            this.startTokenRefreshTimer();
          } else {
            this.signOut();
          }

        });
    }, milliseconds);
  }
}