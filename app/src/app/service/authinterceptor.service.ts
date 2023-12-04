import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService implements HttpInterceptor {

  constructor(private client: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiToken = localStorage.getItem('apiToken');
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiToken}`
      }
    });

    return next.handle(authReq).pipe(
      tap({
        next: (event) => {},
        error: (_error) => console.log(_error)
      })
    );
  }
}
