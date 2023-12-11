import { Component } from '@angular/core';

@Component({
  selector: 'RegisterLink',
  template: `
    <div class="text-sm text-gray-600 dark:text-gray-400">
      Don't have an account yet? <a [routerLink]="['/auth/register']" class="text-blue-600 hover:underline">Register</a>
    </div>
  `,
  styles: []
})
export class RegisterLinkComponent {

}
