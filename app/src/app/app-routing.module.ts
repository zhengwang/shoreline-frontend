import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/routing.module').then(m => m.RoutingModule),
    pathMatch: 'prefix'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/routing.module').then(m => m.RoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
