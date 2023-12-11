import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'AppButton',
  template: `
    <button class="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-500 capitalize"
    [disabled]="disabled"
    [type]="type">
      <ng-content></ng-content>
    </button>
  `,
  styles: [':host { display: contents; }']
})
export class Button {
  @Input() disabled: boolean;
  @Input() type: string = 'button';
  @Output() clickEvent = new EventEmitter();

  handleClick($event: any) {
    $event.preventDefault();
    this.clickEvent.emit(true);
  }
}
