import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/routing.module').then(m => m.RoutingModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/routing.module').then(m => m.RoutingModule)
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
