import { Component, Input } from '@angular/core';

@Component({
  selector: 'UserIcon',
  template: `<i class="fas fa-user" [ngClass]="cls"></i>`,
  styles: `:host {display: contents;}`
})
export class UserIcon {
  @Input() cls: string;
}
