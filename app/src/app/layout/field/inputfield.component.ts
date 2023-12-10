import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'InputField',
  template: `
    <input class="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker placeholder:capitalize" [placeholder]="placeholder|i18next" type="text" [(ngModel)]="value" [disabled]="disabled" (input)="onChange(value)" (blur)="onTouched()"/>
    <div *ngIf="error && touched" class="error-help text-red-500 text-sm font-semibold">
      <span class="inline-block first-letter:uppercase">{{error}}</span>
    </div>
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputfieldComponent)
    }
  ]
})
export class InputfieldComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() error: string;
  @Input() touched?: boolean;

  value = '';

  onChange = (value) => { };

  onTouched = () => { };

  disabled = false;

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
