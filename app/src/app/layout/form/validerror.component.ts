import { Component, Input } from '@angular/core';

@Component({
  selector: 'ValidError',
  template: `
    <div *ngFor="let error of errorMsgs" 
      class="error-help text-red-500 text-sm font-semibold">
      {{error}}
    </div>
  `,
  styles: []
})
export class ValiderrorComponent {
  @Input() errorMsgs: Array<string>;

  constructor() {
    console.log(this.errorMsgs);
  }
}
