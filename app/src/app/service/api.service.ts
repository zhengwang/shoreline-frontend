import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient) { }

  fetchData(url: string, params: any | null) {
    return this.client.get(url, { params });
  }
}
