import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'FieldInput',
  template: `
    <div class="form-group">
      <input [type]="type"
        class="form-control form-control-user"
        aria-describedby="emailHelp"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [disabled]="disabled"
        (input)="onChange(value)"
        (blur)="onTouched()">
      <div class="error-help" *ngIf="errors?.[formControlName] && touched">
        {{ errors?.[formControlName]}}
      </div>
    </div>
  `,
  styles: `:host {display: contents;}`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FieldInput),
    multi: true
  }]
})
export class FieldInput implements ControlValueAccessor {
  @Input() errors;
  @Input() touched;
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() type: string = 'text';

  value: string;
  disabled = false;
  onChange: any = (value: any) => { };
  onTouched: any = () => { };

  constructor() {}

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
