import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private authService: AuthService, private dataService: DataService) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isSignedIn(() => {
      let url: string = '';
      for (let i = 0; i < segments.length; i++) {
        url += segments[i] + '/';
      }

      this.authService.redirectUrl = this.authService.redirectUrl = url;
      this.router.navigate(['sign-in'])
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isSignedIn(() => {
      this.authService.redirectUrl = state.url;
      this.router.navigate(['sign-in'])
    });
  }

  isSignedIn(callback: Function): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.dataService.get('api/Account/IsSignedIn')
        .subscribe((isSignedIn: boolean) => {
          if (isSignedIn) {
            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
            callback();
          }
        });
    });
  }
}