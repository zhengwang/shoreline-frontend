import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from '../layout/layout.module';
import { I18NextModule } from 'angular-i18next';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RoutingModule,
    I18NextModule
  ]
})
export class DashboardModule { }
