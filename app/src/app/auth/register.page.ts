import * as Yup from 'yup';
import * as i18next from 'i18next';
import { Component } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, concat, map, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'Register',
  template: `
    <AuthLayout>
      <Autheader>{{'register'|i18next}}</Autheader>
      <form class="space-y-6"
        [formGroup]="registerForm"
        (ngSubmit)="onSubmit()">
        <div>
          <FieldInput placeholder="first_name" formControlName='first_name' [error]="registerForm.errors?.['first_name']" [touched]="registerForm.controls['first_name'].touched"/>
        </div>
        <div>
          <FieldInput placeholder="last_name" formControlName="last_name" [error]="registerForm.errors?.['last_name']" [touched]="registerForm.controls['last_name'].touched"/>
        </div>
        <div>
          <FieldInput placeholder="email" formControlName="email" [error]="registerForm.errors?.['email']" [touched]="registerForm.controls['email'].touched"/>
        </div>
        <div>
          <PasswordInput formControlName='password' placeholder="password" [error]="registerForm.errors?.['password']" [touched]="registerForm.controls['password'].touched"/>
        </div>
        <div>
          <PasswordInput formControlName="pconfirmed" placeholder="confirm password" [error]="registerForm.errors?.['pconfirmed']" [touched]="registerForm.controls['pconfirmed'].touched"/>
        </div>
        <div class="flex items-center justify-start">
          <FieldCheckbox formControlName="terms" [error]="registerForm.errors?.['terms']">
            I accept the <a class="text-sm text-blue-600 cursor-pointer">Terms and Conditions</a>
          </FieldCheckbox>
        </div>
        <div>
          <AppButton type="submit" [disabled]="registerForm.invalid">
            {{'register'|i18next}}
          </AppButton>
        </div>
      </form>
    </AuthLayout>
  `,
  styles: [':host { display: contents; }']
})
export class Register {

  t = i18next.t;
  registerForm: FormGroup;

  regSchema = Yup.object().shape({
    first_name: Yup.string().required(this.t('required', { attribute: 'first name' }) as string),
    last_name: Yup.string().max(45),
    email: Yup.string().required().email().max(256),
    password: Yup.string().required(),
    pconfirmed: Yup.string().required().oneOf([Yup.ref('password'), ''], 'password not matched'),
    terms: Yup.boolean().isTrue()
  });

  constructor(
    private webSvc: WebService,
    private _route: Router) {
    this.registerForm = new FormGroup(
      {
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        email: new FormControl('', { updateOn: 'blur' }),
        password: new FormControl(),
        pconfirmed: new FormControl(),
        terms: new FormControl(false)
      },
      [],
      this.validate(this.regSchema));
  }

  validate(yupSchema: Yup.Schema): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return concat(
        yupSchema.validate(control.value, { strict: true, abortEarly: false }),
        this.webSvc.checEmailUniq(control.value['email']))
        .pipe(
          map(isValid => isValid ? null : {}),
          catchError(e => {
            if (e instanceof Yup.ValidationError) {
              const { inner } = e;
              let err = {};
              inner.forEach((_e: any) => {
                const { path, message } = _e;
                err[path] = message;
              });
              return of(err);
            }

            if (e instanceof HttpErrorResponse) {
              const { error: { message } } = e;
              return of({ email: message });
            }

            return of(e);
          })
        );
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.webSvc.register(this.registerForm.value).subscribe({
        next: response => {
          const {status, data} = response as any;
          console.log(response);
          if (status == 'ok') {
            localStorage.setItem('apiToken', data);
            this._route.navigate(['/dashboard']);
          }
        }
      });
    }
  }
}
