import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    let url: string = '';
    for(let i = 0; i < segments.length; i++){
      url += segments[i] + '/';
    }

    this.authService.redirectUrl = this.authService.redirectUrl = url;
    this.router.navigate(['sign-in'])
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = state.url;
    this.router.navigate(['sign-in'])
    return false;
  }
}
