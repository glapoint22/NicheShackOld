import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any = {};
  public isError: boolean;
  public notFound: boolean;
  public categories: Array<any> = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

  get(url: string, parameters?: Array<any>): Observable<any> {
    let params = new HttpParams();

    //Set the params
    if (parameters) parameters.forEach(x => params = params.set(x.key, x.value));

    //Get the data
    return this.http.get(url, { params: params, headers: this.authService.authorizationHeader }).pipe(catchError(this.handleError()));
  }


  post(url: string, body: any) {
    return this.http.post(url, body, { headers: this.authService.authorizationHeader }).pipe(catchError(this.handleError()));
  }

  put(url: string, body: any) {
    return this.http.put(url, body, { headers: this.authService.authorizationHeader }).pipe(catchError(this.handleError()));
  }

  handleError() {
    return (error) => {
      if (error.status != 409 && error.status != 401) {
        // showError
        this.isError = true;
      }

      return throwError(error);
    }
  }

  setTokenRefreshTime() {
    let milliseconds = new Date(this.authService.tokenExpires).valueOf() - new Date().valueOf();

    window.setTimeout(() => {
      this.post('api/Account/Refresh', {
        token: this.authService.token,
        refreshToken: this.authService.refreshToken
      })
        .subscribe(response => {
          this.authService.updateToken(response);
          this.setTokenRefreshTime();
        });
    }, milliseconds);
  }
}