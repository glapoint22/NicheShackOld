import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as xhr2 from 'xhr2';
xhr2.prototype._restrictedHeaders = {};

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(REQUEST) protected request: Request) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq: HttpRequest<any> = req;
    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }
      newUrl += req.url;
      serverReq = req.clone({
        url: newUrl,
        headers: new HttpHeaders({
          host: this.request.headers.host,
          connection: this.request.headers.connection,
          accept: this.request.headers.accept,
          cookie: this.request.headers.cookie
        })
      });
    }
    return next.handle(serverReq);
  }
}