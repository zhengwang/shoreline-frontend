import { Component, Input } from '@angular/core';

@Component({
  selector: 'ArrowupIcon',
  template: `
    <svg
      class="w-4 h-4 transition-transform transform"
      [ngClass]="{'rotate-180': active}"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  `,
  styles: [':host { display: contents; }']
})
export class ArrowupIcon {
  @Input() active: boolean = false;
}
