import { Injectable } from '@angular/core';
import { AuthSubject } from 'src/app/classes/auth-subject';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  public tokenExpires: string;
  public refreshToken: string;
  public refreshTokenExpires: string;
  public subject: AuthSubject;

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


  // authorizationHeader
  private _authorizationHeader: HttpHeaders;
  public get authorizationHeader(): HttpHeaders {
    this._authorizationHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this._authorizationHeader;
  }
  public set authorizationHeader(v: HttpHeaders) {
    this._authorizationHeader = v;
  }



  saveToken(tokenData: any, keepSignedIn: boolean) {
    if (keepSignedIn) {
      localStorage.setItem('token', JSON.stringify(tokenData));
    } else {
      // Just in case token is in local storage, remove it
      localStorage.removeItem('token');
      sessionStorage.setItem('token', JSON.stringify(tokenData));
    }
  }


  setToken(tokenData: any) {
    this.token = tokenData.token;
    this.tokenExpires = tokenData.tokenExpires;
    this.refreshToken = tokenData.refreshToken;
    this.refreshTokenExpires = tokenData.refreshTokenExpires;
    this.subject = tokenData.subject;
  }

  getStoredToken() {
    let token;

    token = sessionStorage.getItem('token');
    if (!token) {
      token = localStorage.getItem('token');
    }

    if (!token) return null;

    return JSON.parse(token);
  }

  removeToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.subject = null;
    this.token = null;
  }

  updateSubject(subject: AuthSubject) {
    let tokenData = this.getStoredToken();
    tokenData.subject = subject;

    this.updateToken(tokenData);
  }

  updateToken(tokenData){
    this.setToken(tokenData);
    this.saveToken(tokenData, localStorage["token"] != null);
  }
}