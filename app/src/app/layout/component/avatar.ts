import { Component } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'Avatar',
  template: `
    <div class="relative">
      <button type="button" class="transition-opacity duration-200 rounded-all dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100" (click)="handleClick()">
        <span class="sr-only">User menu</span>
        <img src="assets/avatar.jpg" class="w-10 h-10 rounded-full" alt="Ahmed Kamel"/>
      </button>
    </div>
    <div *ngIf="open" class="absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-[3.5rem] ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none ">
      <a href="#"
        role="menuitem"
        class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
        Your Profile
      </a>
      <a
        href="#"
        role="menuitem"
        class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
        (click)="handleLogout($event)">
        Logout
      </a>
    </div>
  `,
  styles: [],
  animations: []
})
export class Avatar {
  open: boolean = false;

  constructor(
    private authService: WebService,
    private apiService: ApiService) {
  }

  handleClick() {
    this.open = !this.open;
  }

  handleLogout($event) {
    $event.preventDefault();
    this.authService.logout();
  }
}
