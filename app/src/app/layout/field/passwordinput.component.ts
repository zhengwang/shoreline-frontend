import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'PasswordInput',
  template: `
    <div class="relative">
      <input class="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker placeholder:capitalize"
      [type]="type" [placeholder]="placeholder|i18next" [(ngModel)]="value" [disabled]="disabled" (input)="onChange(value)" (blur)="onTouched()"/>
      <div class="absolute top-[1px] right-0">
      <button class="h-10 w-10 border-none text-gray-500" (click)="toggleShow()" type="button">
        <i [className]="show?'fa-solid fa-eye':'fa-solid fa-eye-slash'"></i>
      </button>
      </div>
      <div *ngIf="error && touched" class="error-help text-red-500 text-sm font-semibold">
      <span class="inline-block first-letter:uppercase">{{error}}</span>
    </div>
    </div>
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PasswordinputComponent
    }
  ]
})
export class PasswordinputComponent implements ControlValueAccessor {
  @Input() placeholder = 'password';
  @Input() error: string;
  @Input() touched: boolean;

  show: boolean = false;
  type: string = 'password';

  value = '';

  disabled = false;

  onChange = (value: string) => { };

  onTouched = () => { };

  toggleShow() {
    this.show = !this.show;
    this.type = this.show ? 'text' : 'password';
  }

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
