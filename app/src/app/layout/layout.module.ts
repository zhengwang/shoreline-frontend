import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { Button } from 'src/app/layout/component/button';
import { FieldCheckbox } from 'src/app/layout/field/FieldCheckbox';
import { TextfieldComponent } from 'src/app/layout/field/textfield.component';
import { FloatextfieldComponent } from './field/floatextfield.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './container/sidebar.component';
import { SidebarfooterComponent } from './component/sidebarfooter.component';
import { Navbutton } from './component/navbutton';
import { Loading } from './component/loading';
import { NavbarComponent } from './container/navbar.component';
import { AuthLayout } from './container/authlayout';
import { Logo } from './component/logo';
import { OrComponent } from './component/or.component';
import { FormsModule } from '@angular/forms';
import { Avatar } from './component/avatar';
import { Notificate } from './component/notificate';
import { FieldInput } from './field/FieldInput';
import { RegisterLinkComponent } from './component/registerlink.component';
import { ValiderrorComponent } from './form/validerror.component';
import { PasswordinputComponent } from './field/passwordinput.component';
import { Gitloginbutton } from './component/gitloginbutton';
import { Darktogglebutton } from './component/darktogglebutton';
import { Autheader } from './component/autheader';


@NgModule({
  declarations: [
    Avatar,
    Button,
    Autheader,
    FieldInput,
    OrComponent,
    Logo,
    AuthLayout,
    FieldCheckbox,
    NavbarComponent,
    Loading,
    SidebarComponent,
    Navbutton,
    TextfieldComponent,
    Notificate,
    ValiderrorComponent,
    RegisterLinkComponent,
    FloatextfieldComponent,
    SidebarfooterComponent,
    PasswordinputComponent,
    Gitloginbutton,
    Darktogglebutton,
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18NextModule,
    FormsModule
  ],
  exports: [
    AuthLayout,
    Autheader,
    Logo,
    Button,
    NavbarComponent,
    OrComponent,
    SidebarComponent,
    FieldCheckbox,
    FieldInput,
    FloatextfieldComponent,
    Darktogglebutton,
    Gitloginbutton,
    ValiderrorComponent,
    RegisterLinkComponent,
    PasswordinputComponent
  ]
})
export class LayoutModule { }
