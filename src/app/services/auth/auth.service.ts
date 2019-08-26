import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  public customerName: string;




  public get isLoggedIn(): boolean {
    this.token = this.getToken();
    return this.token != null;
  }




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


  saveToken(tokenData: any, keepSignedIn: boolean) {
    this.token = tokenData.token;
    this.customerName = tokenData.customerName;

    if (keepSignedIn) {
      localStorage.setItem('token', JSON.stringify(tokenData));
    } else {
      sessionStorage.setItem('token', JSON.stringify(tokenData));
    }
  }


  setToken(tokenData: any) {
    this.token = tokenData.token;
    this.customerName = tokenData.customerName;
  }

  getToken() {
    let storedToken;

    if (this.token) return this.token;

    storedToken = sessionStorage.getItem('token');
    if (!storedToken) {
      storedToken = localStorage.getItem('token');
    }

    if (!storedToken) return null;

    return JSON.parse(storedToken);
  }

  removeToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.customerName = null;
    this.token = null;
  }
}