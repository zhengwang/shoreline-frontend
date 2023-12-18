import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'DropDownItem',
  template: `
    <button class="dropdown-item text-capitalize"
      data-toggle="modal"
      data-target="#logoutModal"
      (click)="handleClick($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: `:host {display: contents;}`
})
export class DropDownItem {
  @Output() onclick = new EventEmitter();

  handleClick($event) {
    this.onclick.emit(true);
  }
}
