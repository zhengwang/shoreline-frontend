import { Component, Input } from '@angular/core';

@Component({
  selector: 'CogsIcon',
  template: `<i class="fas fa-cogs" [ngClass]="cls"></i>`,
  styles: `:host {display: contents;}`
})
export class CogsIcon {
  @Input() cls: string;

}
