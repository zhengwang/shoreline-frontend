import { Component } from '@angular/core';

@Component({
  selector: 'Label',
  template: `
  <label class="text-base text-slate-700 capitalize text-ellipsis w-full inline-block">
    <ng-content></ng-content>
  </label>
  `,
  styles: [
  ]
})
export class LabelComponent {

}
