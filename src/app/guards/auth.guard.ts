import { HttpService } from './../services/http.service';
import { HttpLoginService } from './../services/http-login.service';
  
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    public httpLogin: HttpLoginService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.httpLogin.isLoggedIn == false) {
      this.router.navigate(['/login'])
    }
    return true;
  }

}