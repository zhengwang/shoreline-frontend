import { Component } from '@angular/core';

@Component({
  selector: 'AuthLayout',
  template: `
  <div class="bg-gradient-primary vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: ``
})
export class AuthLayout {

}
