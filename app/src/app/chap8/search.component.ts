import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StateService } from './state.service';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'search',
  template: `
  <input type="text" placeholder="Enter product" [formControl]="searchInput"/>
  `,
  styles: [
  ]
})
export class SearchComponent {
  searchInput: FormControl;

  constructor(private state: StateService) {
    this.searchInput = new FormControl('');
    this.searchInput.valueChanges
      .pipe(debounceTime(300))
      .subscribe(searchValue => this.state.searchCriteria = searchValue);
  }

}
