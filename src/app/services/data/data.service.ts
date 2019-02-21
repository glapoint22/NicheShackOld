import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any = {};

  constructor(private http: HttpClient) { }

  get(url: string, parameters?: Array<any>): Observable<any> {
    let params = new HttpParams();

    //Set the params
    if (parameters) parameters.forEach(x => params = params.set(x.key, x.value));

    //Get the data
    return this.http.get(url, { params: params })
      .pipe(
        tap(() => {
          // Hide loading screen
        }),
        catchError(this.handleError())
      );
  }


  post(url: string, body: any) {
    // Hide error screen

    // Show loading screen

    return this.http.post(url, body)
      .pipe(
        tap(() => {
          // Hide loading screen
        }),
        catchError(this.handleError())
      );
  }

  put(url: string, body: any) {
    // Hide error screen

    // Show loading screen

    return this.http.put(url, body)
      .pipe(
        tap(() => {
          // Hide loading screen
        }),
        catchError(this.handleError())
      );
  }

  handleError() {
    return (error) => {
      // showError;
      // hide loading
      return throwError(error);
    }
  }
}
