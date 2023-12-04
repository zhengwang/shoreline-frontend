import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private client: HttpClient) { }

  fetchData(url: string, params: any) {
    this.client.get(url, { params }).subscribe(response => console.info(response));
  }
}
