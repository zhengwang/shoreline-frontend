import { Component, OnInit } from '@angular/core';
import { CsrfService } from './service/csrf.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: []
})
export class AppComponent implements OnInit{

  constructor(private csrfSvc: CsrfService) {
  }

  ngOnInit(): void {
    this.csrfSvc.fetchCsrf();
  }
}
