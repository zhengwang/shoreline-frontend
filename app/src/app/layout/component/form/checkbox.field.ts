import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'Checkbox',
  template: `
    <div class="form-group">
      <div class="custom-control custom-checkbox small">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheck"
          value="1"
          [(ngModel)]="checked"
          (ngModelChange)="handleChange($event)"
          [disabled]="disabled"
          (input)="onChange(checked)"
          (blur)="onTouched()">
        <label
          class="custom-control-label"
          for="customCheck">
          {{ label }}
        </label>
      </div>
    </div>
  `,
  styles: ``,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Checkbox),
    multi: true
  }]
})
export class Checkbox implements ControlValueAccessor {
  @Input() label: string;

  checked: boolean;

  disabled: boolean;

  onChange: any = (value: any) => { };

  onTouched: any = () => { };

  writeValue(obj: any): void {
    this.checked = obj;
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

  handleChange(e: boolean) {
    this.checked = e;
    this.onChange(e);
  }
}
