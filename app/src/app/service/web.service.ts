import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private _route: Router, private client: HttpClient) { }

  fetchCsrf() {
    this.client.get('/sanctum/csrf-cookie').subscribe();
  }

  login(credentials, fn_error) {
    return this.client.post('/web/login', credentials).subscribe({
      next: (response: any) => {
        const { status, data } = response;
        if (status == 'ok') {
          localStorage.setItem('apiToken', data);
          this._route.navigate(['/dashboard']);
        }
      },
      error: error => {
        if (error instanceof HttpErrorResponse) {
          const { status, error: { message } } = error;
          fn_error(message);
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('apiToken');
    return this.client.get('/web/logout').subscribe({
      next: (response: any) => {
        const {status } = response;
        if (status == 'ok') {
          this._route.navigate(['/auth']);
        }
      }
    });
  }
}
