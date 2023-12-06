import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'AppButton',
  template: `
    <button class="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker capitalize" type="button" (click)="handleClick($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
  ]
})
export class ButtonComponent {
  @Output() clickEvent = new EventEmitter();

  handleClick($event: any) {
    $event.preventDefault();
    this.clickEvent.emit(true);
  }
}
