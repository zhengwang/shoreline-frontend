import * as Yup from 'yup';
import * as i18next from 'i18next';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { WebService } from 'src/app/service/web.service';
import { Observable, catchError, from, map, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'Signin',
  template: `
    <AuthLayout>
      <h1 class="text-xl font-semibold text-center">Login</h1>
      <form class="space-y-6" [formGroup]="signinForm" #formElem (ngSubmit)="onSubmit()">
        <div>
          <FieldInput formControlName="email" placeholder="email" [error]="signinForm.errors?.['email']" [touched]="signinForm.controls['email'].touched"/>
        </div>
        <div>
          <PasswordInput formControlName="password" placeholder="password" [error]="signinForm.errors?.['password']" [touched]="signinForm.controls['email'].touched"/>
        </div>
        <div class="flex items-center justify-between">
          <FieldCheckbox>
            {{'remember_me'|i18next}}
          </FieldCheckbox>
          <a href="forgot-password.html" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
        </div>
        <div>
          <AppButton [disabled]="signinForm.invalid" type="submit">
            {{'login'|i18next}}
          </AppButton>
        </div>
      </form>
      <div><Or /></div>
      <div><GitLoginButton /></div>
      <div><RegisterLink /></div>
      <DarkToggleButton />
    </AuthLayout>
  `,
  styles: [':host { display: contents; }']
})
export class Signin {
  @ViewChild('formElem') formElem;
  signinForm: FormGroup;
  t = i18next.t;

  fcSchema = Yup.object().shape({
    email: Yup.string().required(this.t('required', { attribute: 'email' }) as string).email(),
    password: Yup.string().required(this.t('required', { attribute: 'password' }) as string)
  });

  constructor(
    private authSvc: WebService,
    private _router: Router) {
    this.signinForm = new FormGroup(
      {
        email: new FormControl('', { updateOn: 'change' }),
        password: new FormControl('', { updateOn: 'change' })
      },
      [],
      this.validateYupSchema(this.fcSchema));
  }

  onClickSignin($event: any) {
    if ($event) {
      this.formElem.native
    }
  }

  onSubmit() {
    console.log('submit form');
    this.authSvc.login(this.signinForm.value, message => {
      this.signinForm.setErrors({ 'email': message });
    });
  }

  validateYupSchema<T>(yupSchema: Yup.Schema<T>): AsyncValidatorFn {
    return (control: AbstractControl):
      Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return from(
        yupSchema
          .validate(control.value, { strict: true, abortEarly: false }))
        .pipe(
          map((isValid) => isValid ? null : {}),
          catchError((e) => {
            const { inner } = e;
            let err = {};
            inner.forEach(_e => {
              const { path, message } = _e;
              err[path] = message.trim();
            });

            return of(err);
          })
        );
    };
  }
}
