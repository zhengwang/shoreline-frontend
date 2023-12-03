import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EbayComponent } from './ebay.component';
import { RoutingModule } from './routing.module';
import { IndexComponent } from './index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AmazonComponent } from './amazon.component';
import { SearchComponent } from './search.component';
import { ChildComponent } from './child.component';
import { Child2Component } from './child2.component';
import { MediatorServiceSubjectComponent } from './mediator-service-subject.component';
import { I18NextModule } from 'angular-i18next';


@NgModule({
  declarations: [
    EbayComponent,
    IndexComponent,
    MediatorServiceSubjectComponent,
    AmazonComponent,
    SearchComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule,
    I18NextModule,
  ]
})
export class Chap8Module { }
