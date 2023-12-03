import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'app';

  persons = [
    { name: 'Kristen Ramos', email: 'kristen.ramos@example.com' },
    { name: 'Floyd Miles', email: 'floyd.miles@example.com' },
    { name: 'Courtney Henry', email: 'courtney.henry@example.com' },
    { name: 'Ted Fox', email: 'ted.fox@example.com' }
  ];
}
