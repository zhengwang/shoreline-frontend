import { CogsIcon } from './icon/cogs';
import { ListIcon } from './icon/list';
import { UserIcon } from './icon/user';
import { NgModule } from '@angular/core';
import { Brand } from './component/brand';
import { GoogleIcon } from './icon/google';
import { LogoutIcon } from './icon/logout';
import { Topbar } from './container/topbar';
import { NavItem } from './partial/navitem';
import { Profile } from './partial/profile';
import { Sidebar } from './container/sidebar';
import { Divider } from './component/divider';
import { CogIcon } from './icon/cog';
import { CommonModule } from '@angular/common';
import { Link } from './component/button/link';
import { RouterModule } from '@angular/router';
import { I18NextModule } from 'angular-i18next';
import { Button } from './component/button/button';
import { DropDownItem } from './component/dropitem';
import { AuthLayout } from './container/auth.layout';
import { MainLayout } from './container/main.layout';
import { FieldInput } from './component/form/input.field';
import { DropDowndivider } from './component/dropdivider';
import { Checkbox } from './component/form/checkbox.field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthLayout,
    Button,
    FieldInput,
    Checkbox,
    Link,
    GoogleIcon,
    Sidebar,
    MainLayout,
    Topbar,
    Brand,
    Divider,
    DropDowndivider,
    DropDownItem,
    LogoutIcon,
    Profile,
    CogsIcon,
    ListIcon,
    UserIcon,
    NavItem,
    CogIcon,
  ],
  imports: [
    FormsModule,
    CommonModule,
    I18NextModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AuthLayout,
    Button,
    FieldInput,
    Checkbox,
    Link,
    GoogleIcon,
    Sidebar,
    MainLayout,
    Topbar,
  ]
})
export class LayoutModule { }
