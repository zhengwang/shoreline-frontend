import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'Sidebar',
  template: `
    <aside class="flex-shrink-0 h-full hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
      <div class="flex flex-col h-full">
        <nav aria-label="main" class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
          <Navbutton [active]="false" [subItems]="menuItems.dashboard"></Navbutton>
        </nav>
        <div class="flex-shrink-0 px-2 py-4 space-y-2">
          <SidebarFooterButton></SidebarFooterButton>
        </div>
      </div>
    </aside>
  `,
  styles: []
})
export class SidebarComponent {
  currentRoute: string;
  activeMenu: boolean = false;
  menuItems: any;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { url } = event;
        this.currentRoute = url;
        console.log(url);
      }
    });

    this.menuItems = {
      dashboard: [
        { url: '', label: 'film' },
        { url: '', label: 'warehouse' },
        { url: '', label: 'payment' }
      ]
    };
  }

}
