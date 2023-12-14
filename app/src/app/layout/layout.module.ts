import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { AuthButton } from 'src/app/layout/component/auth.button';
import { FieldCheckbox } from 'src/app/layout/field/FieldCheckbox';
import { TextfieldComponent } from 'src/app/layout/field/textfield.component';
import { FloatextfieldComponent } from './field/floatextfield.component';
import { RouterModule } from '@angular/router';
import { Sidebar } from './container/sidebar';
import { SidebarFooter } from './component/sidebarfooter';
import { Navbutton } from './component/navbutton';
import { Loading } from './component/loading';
import { Navbar } from './container/navbar';
import { AuthLayout } from './container/authlayout';
import { Logo } from './component/logo';
import { OrComponent } from './component/or.component';
import { FormsModule } from '@angular/forms';
import { Avatar } from './component/avatar';
import { Notificate } from './component/notificate';
import { FieldInput } from './field/FieldInput';
import { ValiderrorComponent } from './form/validerror.component';
import { PasswordinputComponent } from './field/passwordinput.component';
import { Gitbutton } from './component/git.button';
import { Darktogglebutton } from './component/darktoggle.button';
import { Autheader } from './component/autheader';
import { AuthLink } from './component/auth.link';
import { ArrowupIcon } from './icon/arrowup';
import { Home } from './icon/home';
import { Switch } from './icon/switch';
import { AppHeader } from './component/app.header';
import { Linkbutton } from './component/link.button';
import { Card } from '../layout/container/card';


@NgModule({
  declarations: [
    Avatar,
    AuthButton,
    Autheader,
    Card,
    FieldInput,
    OrComponent,
    Logo,
    AuthLayout,
    FieldCheckbox,
    Navbar,
    Loading,
    Sidebar,
    Navbutton,
    TextfieldComponent,
    Notificate,
    ValiderrorComponent,
    FloatextfieldComponent,
    SidebarFooter,
    PasswordinputComponent,
    Gitbutton,
    Darktogglebutton,
    AuthLink,
    ArrowupIcon,
    Home,
    Switch,
    AppHeader,
    Linkbutton,
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18NextModule,
    FormsModule
  ],
  exports: [
    AuthLayout,
    AuthLink,
    Autheader,
    Card,
    Logo,
    AuthButton,
    Navbar,
    OrComponent,
    Sidebar,
    FieldCheckbox,
    FieldInput,
    FloatextfieldComponent,
    Darktogglebutton,
    Gitbutton,
    ValiderrorComponent,
    PasswordinputComponent,
    AppHeader,
    Linkbutton
  ]
})
export class LayoutModule { }
