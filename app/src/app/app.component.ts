import { Component, OnInit } from '@angular/core';
import { WebService } from './service/web.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private webSvc: WebService) { }

  ngOnInit(): void {
    this.webSvc.fetchCsrf();
  }
}
