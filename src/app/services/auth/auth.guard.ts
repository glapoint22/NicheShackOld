import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  // Can Load
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.isSignedIn(() => {

      // We are not signed in so we will loop through each segment to create the url for the redirect
      let url: string = '';
      for (let i = 0; i < segments.length; i++) {
        url += segments[i] + '/';
      }

      // Assign the redirect url and navigate to the sign in page
      this.authService.redirectUrl = this.authService.redirectUrl = url;
      this.router.navigate(['sign-in'])
    });
  }


  // Can Activate
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isSignedIn(() => {

      // We are not signed in so assign the redirect url and navigate to the sign in page
      this.authService.redirectUrl = state.url;
      this.router.navigate(['sign-in'])
    });
  }


  // Is Signed In
  isSignedIn(callback: Function): Observable<boolean> {
    return new Observable<boolean>(observer => {
      // Find out if we are signed in
      this.authService.isSignedIn
        .subscribe((isSignedIn: boolean) => {
          // We are signed in
          if (isSignedIn) {
            observer.next(true);
            observer.complete();
          } else {
            // We are not signed in
            observer.next(false);
            observer.complete();

            // Call the callback function
            callback();
          }
        });
    });
  }
}