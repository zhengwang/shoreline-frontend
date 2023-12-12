import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'index',
  templateUrl: './index.html',
  styles: [
  ]
})
export class Index {
  constructor(private apiSvc: ApiService) { }
}
