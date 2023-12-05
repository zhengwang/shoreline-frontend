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
import { InputfieldComponent } from './field/inputfield.component';


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
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18NextModule
  ],
  exports: [
    AuthComponent,
    LogoComponent,
    ButtonComponent,
    NavbarComponent,
    NewfilmComponent,
    SidebarComponent,
    CheckboxComponent,
    InputfieldComponent,
    FloatextfieldComponent,
  ]
})
export class LayoutModule { }
