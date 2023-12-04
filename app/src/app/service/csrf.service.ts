import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor(private client: HttpClient) { }

  fetchCsrf() {
    this.client.get('/sanctum/csrf-cookie').subscribe();
  }
}
