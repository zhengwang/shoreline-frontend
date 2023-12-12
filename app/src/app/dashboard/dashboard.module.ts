import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18NextModule } from 'angular-i18next';
import { Index } from 'src/app/dashboard/index/index.page';
import { LayoutModule } from 'src/app/layout/layout.module';
import { RoutingModule } from 'src/app/dashboard/routing.module';
import { Film } from './container/film';
import { Warehouse } from './container/warehouse';



@NgModule({
  declarations: [
    Index,
    Film,
    Warehouse
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    RoutingModule,
    I18NextModule
  ]
})
export class DashboardModule { }
