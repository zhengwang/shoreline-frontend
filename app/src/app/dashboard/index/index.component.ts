import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent {
  constructor(private apiSvc: ApiService) { }
}
