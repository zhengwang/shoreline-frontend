import { IndexPage } from './page';
import { NgModule } from '@angular/core';
import { Index } from './index.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: Index, children: [
      { path: 'main', component: IndexPage, canActivate: [AuthGuard] }
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
