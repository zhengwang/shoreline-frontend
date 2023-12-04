import { Component, OnInit } from '@angular/core';
import { FetchdataService } from 'src/app/service/fetchdata.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit {

  constructor(private fetchSvc: FetchdataService) {
  }

  ngOnInit(): void {
    this.fetchSvc.fetchData('/api/user', {});
  }

}
