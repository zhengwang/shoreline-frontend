import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _route: Router,
    private client: HttpClient) { }

  fetchData(url: string, params?: any) {
    return this.client.get(url, { params });
  }

}
