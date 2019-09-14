import { Injectable } from '@angular/core';
import { Customer } from 'src/app/classes/customer';
import { DataService } from '../data/data.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Token Expiration
  private tokenExpiration: string;

  // Wait For Customer
  private waitForCustomer: Subject<Customer> = new Subject<Customer>();

  // Token Refresh Timer Handle
  private tokenRefreshTimerHandle: number;

  // Customer
  private _customer: Customer;
  public customer = new Observable<Customer>(observer => {
    // If we already have the customer info
    if (this._customer) {
      observer.next(this._customer);
      observer.complete();
    } else {
      // We don't have the customer info so subscribe to waitForCustomer and wait for it to come in
      let subscription: Subscription = this.waitForCustomer
        .subscribe((customer: Customer) => {
          observer.next(customer);
          observer.complete();
          subscription.unsubscribe();
        });
    }
  });


  // Is Signed In
  private _isSignedIn: boolean;
  public isSignedIn: Observable<boolean> = new Observable<boolean>(observer => {
    // We are already signed in
    if (this._isSignedIn) {
      observer.next(true);
      observer.complete();
    } else {
      // We are not signed in so grab the token data from the server...
      // If token data does not come back null that means we are signed in
      this.getTokenData((tokenData) => {
        observer.next(tokenData != null);
        observer.complete();
      });
    }
  });


  // redirectUrl
  private _redirectUrl: string;
  public get redirectUrl(): string {
    let url: string;

    // if _redirectUrl is null, assign url an empty string. This will redirect to the home page
    if (!this._redirectUrl) {
      url = ''
    } else {
      // We have a path to redirct to, so give it to url
      url = this._redirectUrl;

      // Clear so we don't redirect again
      this._redirectUrl = null;
    }

    return url;
  }
  public set redirectUrl(v: string) {
    // Set the value
    this._redirectUrl = v;
  }


  // Constructor
  constructor(private dataService: DataService) { }


  // Get Token Data
  public getTokenData(callback: Function) {
    // Get the token data from the server
    this.dataService
      .get('api/Account/Refresh')
      .subscribe((tokenData: any) => {
        this.setTokenData(tokenData);
        callback(tokenData);
      });
  }

  // Set Token Data
  public setTokenData(tokenData: any) {
    // If token data is not null, set the properties
    if (tokenData) {
      this._customer = tokenData.subject;
      this.tokenExpiration = tokenData.tokenExpiration;
      this._isSignedIn = true;
      this.waitForCustomer.next(tokenData.subject);
    } else {
      // Set wait for customer to null (we have no customer info)
      this.waitForCustomer.next(null);
    }
  }


  // Sign Out
  public signOut() {
    // Stop the timer that refreshes the token
    window.clearTimeout(this.tokenRefreshTimerHandle);

    // This will delete the refresh token in the database and delete the access and refresh cookies
    this.dataService.get('api/Account/SignOut').subscribe(() => { });

    // Set the properties
    this._customer = null;
    this.tokenExpiration = null;
    this._isSignedIn = false;
  }


  // Update Customer
  public updateCustomer(customer: Customer) {
    // Update the customer with the new data
    this._customer = customer;
  }


  // Start Token Refresh Timer
  public startTokenRefreshTimer() {
    // Get the milliseconds to the next refresh
    let milliseconds = new Date(this.tokenExpiration).valueOf() - new Date().valueOf();

    // Set the time out
    this.tokenRefreshTimerHandle = window.setTimeout(() => {
      // Get the token data with the new token expiration
      this.getTokenData(tokenData => {
        if (tokenData) {
          this.startTokenRefreshTimer();
        }
      });
    }, milliseconds);
  }

  public getAccessTokenFromCookie(cookie: string): string {
    let token: string;
    let regEx = new RegExp(/(?:[a-zA-Z]+=)([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)/, 'g');
    let results = regEx.exec(cookie);
    if (results) token = results[1];

    return token;
  }
}