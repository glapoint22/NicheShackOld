import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as xhr2 from 'xhr2';
import { AuthService } from 'src/app/services/auth/auth.service';
xhr2.prototype._restrictedHeaders = {};

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(REQUEST) protected request: Request, private authService: AuthService) { }

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
        let token = this.authService.getAccessTokenFromCookie(this.request.headers.cookie);

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