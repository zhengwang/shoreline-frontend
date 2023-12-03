import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'ebay',
  template: `
    <div class="ebay">
      <h2>eBay component</h2>
      Search criteria: {{ searchFor$ | async }}
    </div>
  `,
  styles: [
    '.ebay: {background: cyan}'
  ]
})
export class EbayComponent {
  searchFor$: Observable<string>;

  constructor(private state: StateService) {
    this.searchFor$ = state.getState();
  }
}
