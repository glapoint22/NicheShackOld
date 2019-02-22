import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any = {};

  constructor(private http: HttpClient, private modalService: ModalService) { }

  get(url: string, parameters?: Array<any>): Observable<any> {
    let params = new HttpParams();

    //Set the params
    if (parameters) parameters.forEach(x => params = params.set(x.key, x.value));

    // Show loading screen
    this.modalService.loading = true;

    //Get the data
    return this.http.get(url, { params: params })
      .pipe(
        tap(() => {
          // Hide loading screen
          this.modalService.loading = false;
        }),
        catchError(this.handleError())
      );
  }


  post(url: string, body: any) {
    // Hide error screen

    // Show loading screen
    this.modalService.loading = true;

    return this.http.post(url, body)
      .pipe(
        tap(() => {
          // Hide loading screen
          this.modalService.loading = false;
        }),
        catchError(this.handleError())
      );
  }

  put(url: string, body: any) {
    // Hide error screen

    // Show loading screen
    this.modalService.loading = true;

    return this.http.put(url, body)
      .pipe(
        tap(() => {
          // Hide loading screen
          this.modalService.loading = false;
        }),
        catchError(this.handleError())
      );
  }

  handleError() {
    return (error) => {
      // showError;
      // hide loading
      this.modalService.loading = false;
      return throwError(error);
    }
  }
}
