import * as Yup from 'yup';
import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';
import { FormControl, FormGroup } from '@angular/forms';
import { YupAsyncValidator } from '../../service/yupasyncvalidator.service';

@Component({
  selector: 'LoginPage',
  template: `
    <AuthLayout>
       <div class="row">
        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
        <div class="col-lg-6">
          <div class="p-5">
            <div class="text-center">
              <h1 class="h4 text-gray-900 mb-4">{{'welcome'|i18next}}</h1>
            </div>
            <form [formGroup]="loginFg" class="user" (ngSubmit)="handleSubmit()">
              <FieldInput formControlName="email" placeholder="enter email address" [errors]="loginFg.errors" [touched]="loginFg.controls['email'].touched"/>
              <FieldInput formControlName="password" placeholder="password" type="password" [errors]="loginFg.errors" [touched]="loginFg.controls['password'].touched"/>
              <Checkbox label="Remember me" formControlName="remember_me"></Checkbox>
              <Button [label]=" 'login'|i18next "></Button>
              <hr>
              <a href="index.html" class="btn btn-google btn-user btn-block">
                <GoogleIcon /> Login with Google
              </a>
              <a href="index.html" class="btn btn-facebook btn-user btn-block">
                <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
              </a>
            </form>
            <hr>
            <Link url="/auth/change-password" label="forget"/>
            <Link url='/auth/register' label="reg"/>
          </div>
        </div>
      </div>
    </AuthLayout>
  `,
  styles: ``
})
export class LoginPage {
  loginFg: FormGroup;

  loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required()
  });

  constructor(private validator: YupAsyncValidator, private webSvc: WebService) {

    this.loginFg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      remember_me: new FormControl(false)
    },
      [],
      validator.validateSchema(this.loginSchema));
  }

  handleSubmit() {
    this.loginFg.markAllAsTouched();
    console.log(this.loginFg.value);
    console.log(this.loginFg.errors);
    if (this.loginFg.valid) {
      this.webSvc.login(this.loginFg.value, message => {
        this.loginFg.setErrors({ email: message });
      });
    }
  }
}
