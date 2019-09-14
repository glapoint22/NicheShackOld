import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, @Inject(PLATFORM_ID) private platformId: Object) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq: HttpRequest<any> = req;

        if (isPlatformBrowser(this.platformId)) {
            let token = this.authService.getAccessTokenFromCookie(document.cookie);
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