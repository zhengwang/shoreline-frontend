import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'Sidebar',
  template: `
    <aside class="flex-shrink-0 h-full hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
      <div class="flex flex-col h-full">
        <nav aria-label="main" class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
          <Navbutton [active]="false" [subItems]="menuItems.dashboard" title="dash">
            <HomeIcon />
          </Navbutton>
        </nav>
        <div class="flex-shrink-0 px-2 py-4 space-y-2">
          <SidebarFooterButton />
        </div>
      </div>
    </aside>
  `,
  styles: []
})
export class Sidebar {
  currentRoute: string;
  activeMenu: boolean = false;
  menuItems: any;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { url } = event;
        this.currentRoute = url;
      }
    });

    this.menuItems = {
      dashboard: [
        { url: '/dashboard/film', label: 'film' },
        { url: '/dashboard/warehouse', label: 'warehouse' },
        { url: '/dashboard/payment', label: 'payment' }
      ]
    };
  }

}
