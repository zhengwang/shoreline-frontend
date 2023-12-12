import { Component, Input } from '@angular/core';

@Component({
  selector: 'AuthLink',
  template: `
    <div class="text-sm text-gray-600 dark:text-gray-400 first-letter:uppercase">
      <ng-content></ng-content>
      <a [routerLink]="url" class="inline-block text-blue-600 hover:underline first-letter:uppercase">
        {{label|i18next}}
      </a>
    </div>
  `,
  styles: []
})
export class AuthLink {
  @Input() label;
  @Input() url;
}
