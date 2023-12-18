import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiToken = localStorage.getItem('apiToken');
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiToken}`
      }
    });

    return next.handle(authReq);
  }
}
