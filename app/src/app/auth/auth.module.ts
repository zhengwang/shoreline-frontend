import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { RoutingModule } from './routing.module';
import { Signin } from 'src/app/auth/signin.page';
import { Register } from './register.page';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Signin,
    Register
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    I18NextModule,
  ],
  exports: [
    Signin
  ]
})
export class AuthModule { }
