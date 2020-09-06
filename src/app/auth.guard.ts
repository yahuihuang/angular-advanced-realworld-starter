import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('token: ' + localStorage.getItem('token'));
      if (localStorage.getItem('token')) {
        return true;
      } else {
        console.log('token is null');
        // this.router.parseUrl(`/login?redirect=${state.url}`);
        // this.router.navigate(['/login?redirect=${state.url}']);
        this.router.navigateByUrl('/login?redirect=' + state.url);
        return false;
      }
  }

  constructor(private router: Router) {
  }
}
