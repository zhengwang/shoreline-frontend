import { Component } from '@angular/core';

@Component({
  selector: 'MainLayout',
  template: `
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class MainLayout {

}
