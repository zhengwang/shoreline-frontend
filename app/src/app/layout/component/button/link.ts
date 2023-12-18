import { Component, Input } from '@angular/core';

@Component({
  selector: 'Link',
  template: `
    <div class='text-center'>
      <a class='small text-capitalize' [routerLink]="[url]">
        {{label|i18next}}
      </a>
    </div>
  `,
  styles: `:host {display: contents;}`
})
export class Link {
  @Input() label: string;
  @Input() url: string;
}
