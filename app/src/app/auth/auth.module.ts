import { NgModule } from '@angular/core';
import { LoginPage } from './page/login';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { RoutingModule } from './routing.module';
import { LayoutModule } from '../layout/layout.module';
import { RegisterComponent } from './page/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPage,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    I18NextModule
  ]
})
export class AuthModule { }
