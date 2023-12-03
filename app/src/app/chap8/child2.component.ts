import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
  <div class="wrapper">
    <h2>Child</h2>
    <div>This content is definded in child</div>
    <p>
      <ng-content></ng-content>
    </p>
</div>
  `,
  styles: [
    '.wrapper {background: lightgreen}',
    ':host: { all: initial}'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Child2Component {

}
