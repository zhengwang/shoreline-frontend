import { Component, Input } from '@angular/core';

@Component({
  selector: 'ListIcon',
  template: `<i class="fas fa-list" [ngClass]="cls"></i>`,
  styles: `:host {display: contents;}`
})
export class ListIcon {
  @Input() cls: string;
}
