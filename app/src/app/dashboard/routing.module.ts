import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from 'src/app/guard/dashboard.guard';
import { IndexComponent } from 'src/app/dashboard/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [DashboardGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
