import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { RoutingModule } from './routing.module';
import { SigninComponent } from './signin.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent
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
    SigninComponent
  ]
})
export class AuthModule { }
