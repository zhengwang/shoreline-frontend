import { Component, Input } from '@angular/core';

@Component({
  selector: 'Button',
  template: `
    <button type="button"
      class="btn btn-primary btn-user btn-block text-capitalize">
      {{ label }}
    </button>
  `,
  styles: `:host {display: contents;}`
})
export class Button {
  @Input() label: string;
}
