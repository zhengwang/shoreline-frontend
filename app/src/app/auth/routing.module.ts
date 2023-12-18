import { NgModule } from '@angular/core';
import { LoginPage } from './page/login';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginPage}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
