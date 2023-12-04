import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredential } from './interface/ICredential';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private _router: Router) { }

  login(credential: ICredential) {
    this.httpClient.post<any>('login', credential).subscribe(response => {
      const { status, data } = response;
      if (status == 'ok') {
        localStorage.setItem('apiToken', data);
        this._router.navigate(['/dashboard']);
      }
    });
  }
}
