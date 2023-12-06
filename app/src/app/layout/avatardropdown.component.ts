import { Component } from '@angular/core';

@Component({
  selector: 'Avatardropdown',
  template: `
    <div class="absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-[3.5rem] ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none">
      <a href="#"
        role="menuitem"
        class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
        Your Profile
      </a>
      <a href="#"
        role="menuitem"
        class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
        Logout
      </a>
    </div>
  `,
  styles: [
  ]
})
export class AvatardropdownComponent {

}
