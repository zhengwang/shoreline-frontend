import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'FieldCheckbox',
  template: `
    <label class="flex items-center">
      <div class="relative inline-flex items-center">
        <input type="checkbox" class="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none toggle checked:bg-primary-light disabled:bg-gray-200 focus:outline-none" [(ngModel)]="checked" [disabled]="disabled" (change)="onChange(checked)" (click)="onTouched()"/>
        <span
          class="absolute top-0 left-0 w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm"></span>
      </div>
      <span class="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400 first-letter:uppercase">
        <ng-content></ng-content>
      </span>
      <div *ngIf="error && touched" class="error-help text-red-500 text-sm font-semibold">
        <span class="inline-block first-letter:uppercase">{{error}}</span>
      </div>
    </label>
  `,
  styles: [':host { display: contents; }'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FieldCheckbox
    }
  ]
})
export class FieldCheckbox implements ControlValueAccessor {

  @Input() error: string;
  checked: boolean;

  onChange = (value: boolean) => { };

  onTouched = () => { };

  touched = false;

  disabled = false;

  writeValue(checked: any): void {
    this.checked = checked;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = this.disabled;
  }
}
