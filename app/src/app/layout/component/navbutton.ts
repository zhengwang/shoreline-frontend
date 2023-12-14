import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
        <ArrowupIcon [active]="active" />
      </span>
    </a>
      <!-- submenu -->
    <div *ngIf="active" role="menu" class="mt-2 space-y-2 px-7" aria-label="Dashboards">
      <a *ngFor="let item of subItems"
        [routerLink]="item.url"
        role="menuitem"
        class="block p-2 text-sm  transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700 capitalize"
        [ngClass]="activeUrl.indexOf(item.label) >= 0 ? 'text-gray-700':'text-gray-400'">
        {{ item.label | i18next}}
      </a>
    </div>
  `,
  styles: [
  ]
})
export class Navbutton implements OnInit {
  @Input() title: string;
  @Input() active: boolean = false;
  @Input() subItems: Array<any>;

  activeUrl: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        const { url } = event;
        this.activeUrl = url;
      }
    });
  }

  handleClickMenu($event) {
    $event.preventDefault();
    this.active = !this.active;
  }

}
