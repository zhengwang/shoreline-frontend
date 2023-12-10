import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredential } from './interface/ICredential';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private _router: Router) { }

  login(credential: ICredential, fn_cb: any) {
    this.httpClient
      .post<any>('login', credential)
      .subscribe({
        next: (response) => {
          const { status, data } = response;
          if (status == 'ok') {
            localStorage.setItem('apiToken', data);
            this._router.navigate(['/dashboard']);
          }
        },
        error: (error: any) => {
          if (error.status == 401) {
            const { error: { message } } = error;
            fn_cb(message);
          }
        }
      });
  }
}
