import { Component } from '@angular/core';

@Component({
  selector: 'SidebarFooterButton',
  template: `
    <button
      type="button"
      class="flex items-center justify-center w-full px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
    >
      <span aria-hidden="true">
        <SwitchIcon />
      </span>
      <span class="capitalize">{{'customize'|i18next}}</span>
    </button>
  `,
  styles: [
  ]
})
export class SidebarFooter {

}
