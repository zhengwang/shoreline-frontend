import { Film } from './container/film';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18NextModule } from 'angular-i18next';
import { Warehouse } from './container/warehouse';
import { Index } from 'src/app/dashboard/index/index.page';
import { LayoutModule } from 'src/app/layout/layout.module';
import { RoutingModule } from 'src/app/dashboard/routing.module';
import { FilmComponent } from './table/film.component';
import { Payment } from './container/payment';




@NgModule({
  declarations: [
    Index,
    Film,
    Warehouse,
    FilmComponent,
    Payment,
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
