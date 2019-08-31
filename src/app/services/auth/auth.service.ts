import { Injectable } from '@angular/core';
import { AuthSubject } from 'src/app/classes/auth-subject';
import { DataService } from '../data/data.service';
import { TokenData } from 'src/app/classes/token-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Token Data
  private tokenData: TokenData;

  // Access Token
  public get accessToken(): string {
    if (!this.tokenData) return null;
    return this.tokenData.accessToken;
  }

  // Access Token Expiration
  public get accessTokenExpiration(): string {
    if (!this.tokenData) return null;
    return this.tokenData.accessTokenExpiration;
  }

  // Refresh Token
  public get refreshToken(): string {
    if (!this.tokenData) return null;
    return this.tokenData.refreshToken;
  }

  // Subject
  public get subject(): AuthSubject {
    if (!this.tokenData) return null;
    return this.tokenData.subject;
  }


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



  public setTokenData(tokenData: TokenData) {
    this.tokenData = tokenData;
  }


  public signOut() {
    this.tokenData = null;
    window.clearTimeout(this.tokenRefreshTimerHandle);
    this.dataService.get('api/Account/SignOut').subscribe(() => { });
  }

  public updateSubject(subject: AuthSubject) {
    this.tokenData.subject = subject;
  }


  public startTokenRefreshTimer() {
    let milliseconds = new Date(this.accessTokenExpiration).valueOf() - new Date().valueOf();

    this.tokenRefreshTimerHandle = window.setTimeout(() => {
      this.dataService.post('api/Account/Refresh', {
        accessToken: this.accessToken,
        refreshToken: this.refreshToken
      })
        .subscribe((tokenData: TokenData) => {
          if (tokenData != null) {
            // Update the token data and restart the refresh timer
            this.setTokenData(tokenData);
            this.startTokenRefreshTimer();
          } else {
            this.signOut();
          }

        });
    }, milliseconds);
  }
}