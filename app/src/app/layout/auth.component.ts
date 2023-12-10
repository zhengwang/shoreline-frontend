import { Component } from '@angular/core';

@Component({
  selector: 'AuthLayout',
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Logo></Logo>
      <main>
        <div class="max-w-sm px-4 py-6 space-y-6 bg-white rounded-md dark:bg-darker w-[24rem]">
          <ng-content></ng-content>
        </div>
      </main>
    </div>
  `,
  styles: [
  ]
})
export class AuthComponent {

}
