import { Component } from '@angular/core';

@Component({
  selector: 'Or',
  template: `
    <div class="flex items-center justify-center space-x-2 flex-nowrap">
      <span class="w-20 h-px bg-gray-300"></span>
      <span>OR</span>
      <span class="w-20 h-px bg-gray-300"></span>
    </div>
  `,
  styles: [':host {display: contents;}']
})
export class OrComponent {

}
