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
    let cookie: any = {};
    let authorization: string = '';


    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }

      if (this.request.headers.cookie) {
        let token: string;
        let regEx = new RegExp(/(?:[a-zA-Z]+=)([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)/, 'g');
        let results = regEx.exec(this.request.headers.cookie);
        if (results) token = results[1];

        if (token) {
          authorization = 'Bearer ' + token;
        }

        cookie = this.request.headers.cookie;
      }


      newUrl += req.url;
      serverReq = req.clone({
        url: newUrl,
        headers: new HttpHeaders({
          cookie: cookie,
          Authorization: authorization
        })
      });
    }
    return next.handle(serverReq);
  }
}