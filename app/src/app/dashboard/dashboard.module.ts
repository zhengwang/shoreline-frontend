import { IndexPage } from './page';
import { NgModule } from '@angular/core';
import { Index } from './index.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    IndexPage,
    Index
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule,
    LayoutModule
  ],
  exports: [
    IndexPage
  ]
})
export class DashboardModule { }
