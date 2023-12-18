import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiSvc: ApiService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.apiSvc.fetchData('/api/user', null)
      .pipe(
        map(value => {
          console.log(value);
          return true;
        }),
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this.router.navigate(['/auth']);
            }
          }
          return of (err);
        }));
  }

}
