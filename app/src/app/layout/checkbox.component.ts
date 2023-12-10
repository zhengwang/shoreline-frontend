import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'Checkbox',
  template: `
    <label class="flex items-center">
      <div class="relative inline-flex items-center">
        <input type="checkbox" name="remember_me" class="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none toggle checked:bg-primary-light disabled:bg-gray-200 focus:outline-none"/>
        <span
          class="absolute top-0 left-0 w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm"></span>
      </div>
      <span class="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400 capitalize">  {{label|i18next}}
      </span>
    </label>
  `,
  styles: [
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() checked: boolean;

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
