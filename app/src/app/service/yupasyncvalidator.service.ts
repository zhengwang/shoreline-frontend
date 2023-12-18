import * as Yup from 'yup';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class YupAsyncValidator {

  constructor() {}

  validateSchema<T>(yupSchema: Yup.Schema<T>): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return from(yupSchema
        .validate(control.value, { abortEarly: false }))
        .pipe(
          map((isValid) => (isValid ? null : {})),
          catchError(e => {
            if (e instanceof Yup.ValidationError) {
              const { inner } = e;
              let err = {};
              inner.forEach(_e => {
                const { path, message } = _e as any;
                err[path] = message.trim();
              });
              return of(err);
            }
            return of({ [e.path ? e.path : 'yup']: e.message });
          }));
    }
  }
}
