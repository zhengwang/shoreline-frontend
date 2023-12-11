import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private _route: Router,
    private httpClient: HttpClient) { }

  login(credential, fn_error) {
    return this.httpClient.post('/web/login', credential).subscribe({
      next: (response: any) => {
        const { status, data } = response;
        if (status == 'ok') {
          localStorage.setItem('apiToken', data);
          this._route.navigate(['/dashboard'])
        }
      },
      error: error => {
        if (error instanceof HttpErrorResponse) {
          const { status, error: { message } } = error;
          if (status == 401) {
            fn_error(message);
          }
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('apiToken');
    return this.httpClient.get('/web/logout').subscribe({
      next: (response: any) => {
        console.log(response);
        const { status } = response;
        if (status == 'ok') {
          this._route.navigate(['/auth/signin']);
        }
      }
    });
  }

  checEmailUniq(email) {
    return this.httpClient.get('/web/uniq-email', {params: { email }});
  }

  register(payload) {
    return this.httpClient.post('/web/register', payload);
  }
}
