import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'Sidebar',
  template: `
    <aside class="flex-shrink-0 h-full hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block">
      <div class="flex flex-col h-full">
        <nav aria-label="main" class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
          <Navbutton [active]="false" [subItems]="menuItems.dashboard" title="dashboard">
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
        </Navbutton>
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
