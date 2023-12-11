import { Component } from '@angular/core';

@Component({
  selector: 'Autheader',
  template: `
    <h1 class="text-xl font-semibold text-center first-letter:uppercase">
      <ng-content></ng-content>
    </h1>`,
  styles: [':host { display: contents;}']
})
export class Autheader {

}
