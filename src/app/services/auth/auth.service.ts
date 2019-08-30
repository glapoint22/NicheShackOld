import { Injectable } from '@angular/core';
import { AuthSubject } from 'src/app/classes/auth-subject';
import { DataService } from '../data/data.service';
import { HttpHeaders } from '@angular/common/http';
import { TokenData } from 'src/app/classes/token-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  public tokenExpires: string;
  public refreshToken: string;
  public refreshTokenExpires: string;
  public subject: AuthSubject;
  public safeToRunApp: boolean;
  private tokenRefreshTimerHandle: number;

  // isSignedIn
  public get isSignedIn(): boolean {
    return localStorage["token"] != null || sessionStorage["token"] != null;
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


  constructor(private dataService: DataService) { }


  private saveToken(tokenData: TokenData, keepSignedIn: boolean) {
    if (keepSignedIn) {
      localStorage.setItem('token', JSON.stringify(tokenData));
    } else {
      // Just in case token is in local storage, remove it
      localStorage.removeItem('token');
      sessionStorage.setItem('token', JSON.stringify(tokenData));
    }
  }


  public setTokenData(tokenData: TokenData) {
    this.token = tokenData.token;
    this.tokenExpires = tokenData.tokenExpires;
    this.refreshToken = tokenData.refreshToken;
    this.refreshTokenExpires = tokenData.refreshTokenExpires;
    this.subject = tokenData.subject;
    // this.dataService.authorizationHeader = new HttpHeaders({
    //   'Authorization': 'Bearer ' + this.token
    // });
  }

  public getStoredTokenData(): TokenData {
    let token;

    token = sessionStorage.getItem('token');
    if (!token) {
      token = localStorage.getItem('token');
    }

    if (!token) return null;

    return JSON.parse(token);
  }

  public removeTokenData() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.token = null;
    this.tokenExpires = null;
    this.refreshToken = null;
    this.refreshTokenExpires = null;
    this.subject = null;
    this.dataService.authorizationHeader = null;
    window.clearTimeout(this.tokenRefreshTimerHandle);
  }

  public updateSubject(subject: AuthSubject) {
    let tokenData = this.getStoredTokenData();
    tokenData.subject = subject;

    this.updateTokenData(tokenData);
  }

  public updateTokenData(tokenData: TokenData, keepSignedIn: boolean = localStorage["token"] != null) {
    this.setTokenData(tokenData);
    this.saveToken(tokenData, keepSignedIn);
  }

  public startTokenRefreshTimer() {
    let milliseconds = new Date(this.tokenExpires).valueOf() - new Date().valueOf();

    this.tokenRefreshTimerHandle = window.setTimeout(() => {
      this.dataService.post('api/Account/Refresh', {
        token: this.token,
        refreshToken: this.refreshToken
      })
        .subscribe((tokenData: TokenData) => {
          this.safeToRunApp = true;

          if (tokenData != null) {
            // Update the token data and restart the refresh timer
            this.updateTokenData(tokenData);
            this.startTokenRefreshTimer();
          } else {
            this.removeTokenData();
          }

        });
    }, milliseconds);
  }

  public isTokenExpired(tokenExpires: string) {
    return new Date(tokenExpires).valueOf() < new Date().valueOf();
  }
}