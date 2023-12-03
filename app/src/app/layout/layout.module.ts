import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18NextModule } from 'angular-i18next';
import { LabelComponent } from './label.component';
import { ButtonComponent } from './button.component';
import { SimplecardComponent } from './simplecard.component';
import { TextfieldComponent } from './field/textfield.component';
import { NewfilmComponent } from './form/newfilm/newfilm.component';
import { FloatextfieldComponent } from './field/floatextfield.component';
import { CheckboxComponent } from './checkbox.component';


@NgModule({
  declarations: [
    SimplecardComponent,
    LabelComponent,
    TextfieldComponent,
    NewfilmComponent,
    ButtonComponent,
    FloatextfieldComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    I18NextModule
  ],
  exports: [
    ButtonComponent,
    NewfilmComponent,
    FloatextfieldComponent,
    CheckboxComponent
  ]
})
export class LayoutModule { }
