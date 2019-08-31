import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService, @Inject(PLATFORM_ID) private platformId: Object) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq: HttpRequest<any> = req;

        if (isPlatformBrowser(this.platformId)) {
            let token = this.cookieService.get('access');
            if (token) {
                authReq = req.clone({
                    headers: new HttpHeaders({
                        Authorization: 'Bearer ' + token
                    })
                });
            }
        }

        return next.handle(authReq);
    }
}