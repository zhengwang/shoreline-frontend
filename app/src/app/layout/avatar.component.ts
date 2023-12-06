import { Component } from '@angular/core';

@Component({
  selector: 'Avatar',
  template: `
    <div class="relative">
      <button type="button" class="transition-opacity duration-200 rounded-all dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100">
        <span class="sr-only">User menu</span>
        <img src="assets/avatar.jpg" class="w-10 h-10 rounded-full" alt="Ahmed Kamel"/>
      </button>
    </div>
  `,
  styles: [
  ]
})
export class AvatarComponent {

}
