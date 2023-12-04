import { Component, Input } from '@angular/core';

@Component({
  selector: 'Navbutton',
  template: `
   <a href="#"
    (click)="handleClickMenu($event)"
    class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary" [ngClass]="{'bg-primary-100': active}" role="button" aria-haspopup="true" :aria-expanded="true">
      <span>
        <svg class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      </span>
      <span class="ml-2 text-sm capitalize">{{'dashboard'|i18next}}</span>
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

  @Input() active: boolean = false;
  @Input() subItems: Array<any>;

  handleClickMenu($event) {
    $event.preventDefault();
    this.active = !this.active;
  }

}
