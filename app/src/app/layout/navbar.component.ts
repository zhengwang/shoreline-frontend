import { Component } from '@angular/core';

@Component({
  selector: 'AppNavbar',
  template: `
    <header class="relative bg-white dark:bg-darker">
      <div class="flex items-center justify-between p-2 border-b dark:border-primary-darker">
        <a href="index.html" class="inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark dark:text-light">
          K-WD
        </a>

        <nav class="hidden space-x-2 md:flex md:items-center">
          <Notificate></Notificate>
          <div><Avatar></Avatar></div>
          <div><Avatardropdown></Avatardropdown></div>
        </nav>
      </div>
    </header>
  `,
  styles: [
  ]
})
export class NavbarComponent {

}
