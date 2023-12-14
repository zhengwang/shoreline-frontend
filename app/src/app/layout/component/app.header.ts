import { Component, Input } from '@angular/core';

@Component({
  selector: 'AppHeader',
  template: `
    <div class="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:broder-primary-darker">
      <h1 class="text-2xl font-semibold capitalize">{{title|i18next}}</h1>
      <a *ngIf="showButton" [routerLink]="url"
        [target]="newTab"
        class="px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark">
        {{btn_lbl|i18next}}
      </a>
    </div>
  `,
  styles: [':host { display: contents; }']
})
export class AppHeader {
  @Input() title: string;
  @Input() showButton: boolean = false;
  @Input() btn_lbl: string;
  @Input() url: string;
  @Input() newTab: string = '_blank';
}
