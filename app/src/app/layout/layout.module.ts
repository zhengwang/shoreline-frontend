import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { LabelComponent } from './label.component';
import { ButtonComponent } from './button.component';
import { CheckboxComponent } from './checkbox.component';
import { SimplecardComponent } from './simplecard.component';
import { TextfieldComponent } from './field/textfield.component';
import { NewfilmComponent } from './form/newfilm/newfilm.component';
import { FloatextfieldComponent } from './field/floatextfield.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { SidebarfooterComponent } from './sidebarfooter.component';
import { NavbuttonComponent } from './navbutton.component';
import { LoadingComponent } from './loading.component';
import { NavbarComponent } from './navbar.component';
import { AuthComponent } from './auth.component';
import { LogoComponent } from './logo.component';
import { OrComponent } from './or.component';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar.component';
import { NotificateComponent } from './notificate.component';
import { InputfieldComponent } from './field/inputfield.component';
import { AuthRegisterComponent } from './authregister.component';
import { ValiderrorComponent } from './form/validerror.component';
import { PasswordinputComponent } from './passwordinput.component';
import { GitloginbuttonComponent } from './gitloginbutton.component';
import { DarktogglebuttonComponent } from './darktogglebutton.component';


@NgModule({
  declarations: [
    SimplecardComponent,
    LabelComponent,
    TextfieldComponent,
    NewfilmComponent,
    ButtonComponent,
    FloatextfieldComponent,
    CheckboxComponent,
    SidebarComponent,
    SidebarfooterComponent,
    NavbuttonComponent,
    LoadingComponent,
    NavbarComponent,
    AuthComponent,
    LogoComponent,
    InputfieldComponent,
    OrComponent,
    AvatarComponent,
    NotificateComponent,
    DarktogglebuttonComponent,
    GitloginbuttonComponent,
    ValiderrorComponent,
    AuthRegisterComponent,
    PasswordinputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18NextModule,
    FormsModule
  ],
  exports: [
    AuthComponent,
    LogoComponent,
    ButtonComponent,
    NavbarComponent,
    NewfilmComponent,
    OrComponent,
    SidebarComponent,
    CheckboxComponent,
    InputfieldComponent,
    FloatextfieldComponent,
    DarktogglebuttonComponent,
    GitloginbuttonComponent,
    ValiderrorComponent,
    AuthRegisterComponent,
    PasswordinputComponent
  ]
})
export class LayoutModule { }
