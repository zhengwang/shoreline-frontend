import { Component, Input } from '@angular/core';

@Component({
  selector: 'Navbutton',
  template: `
   <a href="#"
    (click)="handleClickMenu($event)"
    class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary" [ngClass]="{'bg-primary-100': active}" role="button" aria-haspopup="true" :aria-expanded="true">
      <span>
        <ng-content></ng-content>
      </span>
      <span class="ml-2 text-sm capitalize">{{title|i18next}}</span>
      <span class="ml-auto" aria-hidden="true">
        <svg
          class="w-4 h-4 transition-transform transform"
          [ngClass]="{'rotate-180': active}"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </a>
      <!-- submenu -->
    <div *ngIf="active" role="menu" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
    <a *ngFor="let item of subItems"
      href="index.html"
      role="menuitem"
      class="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700">
      {{ item.label | i18next}}
    </a>
    </div>
  `,
  styles: [
  ]
})
export class NavbuttonComponent {
  @Input() title: string;
  @Input() active: boolean = false;
  @Input() subItems: Array<any>;

  handleClickMenu($event) {
    $event.preventDefault();
    this.active = !this.active;
  }

}
