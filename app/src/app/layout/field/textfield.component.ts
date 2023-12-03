import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'TextField',
  template: `
    <div class="flex flex-row gap-2">
      <div class="basis-2/12 text-end my-auto">
        <Label>{{label}}</Label>
      </div>
      <div class="basis-10/12 w-full">
        <input class="mt-1 inline-block w-full px-3 py-2 bg-white border border-slate-300 rounded text-sm shadow placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
			type="text" />
      </div>
    </div>
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextfieldComponent,
      multi: true
    }
  ]
})
export class TextfieldComponent implements ControlValueAccessor, Validator {

  @Input() label: string;
  @Input() value: string;

  onChange = (value: string) => { };

  onTouched = () => { };

  touched = false;

  disabled = false;

  writeValue(value: string): void {
    this.value = value;
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

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null;
  }
}
