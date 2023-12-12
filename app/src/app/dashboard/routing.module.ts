import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Film } from 'src/app/dashboard/container/film';
import { Index } from 'src/app/dashboard/index/index.page';
import { DashboardGuard } from 'src/app/guard/dashboard.guard';
import { Warehouse } from 'src/app/dashboard/container/warehouse';

const routes: Routes = [
  {
    path: '',
    component: Index,
    canActivate: [DashboardGuard],
    children: [
      { path: 'film',  component: Film},
      { path: 'warehouse', component: Warehouse}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
