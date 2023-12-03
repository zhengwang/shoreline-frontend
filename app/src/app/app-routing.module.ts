import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'chap8',
    loadChildren: () => import('./chap8/chap8.module').then(m => m.Chap8Module),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/routing.module').then(m => m.RoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
