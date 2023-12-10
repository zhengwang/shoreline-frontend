import * as Yup from 'yup';
import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Observable, catchError, from, map, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import * as i18next from 'i18next';

@Component({
  selector: 'Signin',
  template: `
    <AuthLayout>
      <h1 class="text-xl font-semibold text-center">Login</h1>
      <form [formGroup]="signinForm" #formElem="ngForm" (ngSubmit)="onSubmit()" class="space-y-6">
        <div>
          <InputField formControlName="email" placeholder="email" [error]="signinForm.get('email')?.getError('email')" [touched]="signinForm.controls['email'].touched"/>
        </div>
        <div>
          <PasswordInput formControlName="password" placeholder="password" [error]="signinForm.errors?.['password']" [touched]="signinForm.controls['email'].touched"/>
        </div>
        <div class="flex items-center justify-between">
          <Checkbox label="remember_me"/>
          <a href="forgot-password.html" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
        </div>
        <div>
          <AppButton (clickEvent)="onClickSignin($event)">{{'login'|i18next}}</AppButton>
        </div>
      </form>
      <div><Or /></div>
      <div><GitLoginButton /></div>
      <div><AuthRegister /></div>
      <DarkToggleButton />
    </AuthLayout>
  `,
  styles: []
})
export class SigninComponent {
  @ViewChild('formElem') formElem;
  signinForm: FormGroup;
  t = i18next.t;

  fcSchema = Yup.object().shape({
    email: Yup.string().required(this.t('required', { attribute: 'email' }) as string).email(),
    password: Yup.string().required(this.t('required', { attribute: 'password' }) as string)
  });

  constructor(private loginSvc: LoginService) {
    this.signinForm = new FormGroup({
      email: new FormControl('', {updateOn: 'change'}),
      password: new FormControl('')
    }, [], this.validateYupSchema(this.fcSchema));
  }

  onClickSignin($event: any) {
    if ($event) {
      this.signinForm.markAllAsTouched();
      this.formElem.ngSubmit.emit();
    }
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.loginSvc.login(this.signinForm.value, error => {
        console.log(error);
        const _temp = this.signinForm.controls['email'].errors || {};
        this.signinForm.get('email')?.setErrors({ 'email': error, ..._temp });
      });
    }
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
