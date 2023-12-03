import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'amazon',
  template: `
    <div class="amazon">
      <h2>Amazon component</h2>
      Search criteria: {{ searchFor$ | async }}
    </div>
  `,
  styles: [
    '.amazon: {background: blue}'
  ]
})
export class AmazonComponent {
  searchFor$: Observable<string>;

  constructor(private state: StateService) {
    this.searchFor$ = state.getState();
  }
}
