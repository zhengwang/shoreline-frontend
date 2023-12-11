import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Signin } from 'src/app/auth/signin.page';
import { Register } from 'src/app/auth/register.page';

const routes: Routes = [
  { path: 'auth/signin', component: Signin, pathMatch: 'full' },
  { path: 'auth/register', component: Register, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
