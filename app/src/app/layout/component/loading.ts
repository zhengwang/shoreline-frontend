import { Component } from '@angular/core';

@Component({
  selector: 'Loading',
  template: `
    <div class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <div class="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-whilte bg-primary-darker">
        Loading...
      </div>
    </div>
  `,
  styles: [
  ]
})
export class Loading {

}
