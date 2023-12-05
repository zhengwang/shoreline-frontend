import { Component, Input } from '@angular/core';

@Component({
  selector: 'InputField',
  template: `
    <input class="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker placeholder:capitalize" [placeholder]="placeholder"/>
  `,
  styles: [
  ]
})
export class InputfieldComponent {
  @Input() placeholder: string;
}
