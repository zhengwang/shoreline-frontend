import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private apiSvc: ApiService, private _route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.apiSvc.fetchData('/api/user')
      .pipe(
        map(value => {
          console.log(value);
          return true;
        }),
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this._route.navigate(['/signin']);
            }
          }
          return of(err);
        }));
  }

}
