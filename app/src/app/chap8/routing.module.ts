import { NgModule } from '@angular/core';
import { EbayComponent } from './ebay.component';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { AmazonComponent } from './amazon.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'chap8/ebay', component: EbayComponent, pathMatch: "full" },
      { path: 'chap8/amazon', component: AmazonComponent, pathMatch: "full" }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }