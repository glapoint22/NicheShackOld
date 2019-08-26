import { Injectable } from '@angular/core';
import { AuthSubject } from 'src/app/classes/auth-subject';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
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
  private _authorizationHeader : HttpHeaders;
  public get authorizationHeader() : HttpHeaders {
    this._authorizationHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this._authorizationHeader;
  }
  public set authorizationHeader(v : HttpHeaders) {
    this._authorizationHeader = v;
  }
  


  saveToken(tokenData: any, keepSignedIn: boolean) {
    if (keepSignedIn) {
      localStorage.setItem('token', JSON.stringify(tokenData));
    } else {
      sessionStorage.setItem('token', JSON.stringify(tokenData));
    }
  }


  setToken(tokenData: any) {
    this.token = tokenData.token;
    this.subject = tokenData.subject;
  }

  getToken() {
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
    let token = this.getToken();
    token.subject = subject;

    this.setToken(token);
    this.saveToken(token, localStorage["token"] != null);
  }
}