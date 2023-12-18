import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'NavItem',
  template: `
    <li class="nav-item active">
      <a class="nav-link collapsed" href="#" data-toggle="collapse" [attr.data-target]="'#'+id" aria-expanded="true" [attr.aria-controls]="'#'+id">
        <CogIcon />
        <span class="text-capitalize">{{label | i18next}}</span>
      </a>
      <div [id]="id" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header text-uppercase">{{ subtitle | i18next }}:</h6>
            <a *ngFor="let menu of submenu"
              class="collapse-item text-capitalize"
              [routerLink]="menu.url">
            {{ menu.label | i18next }}
          </a>
        </div>
      </div>
    </li>
  `,
  styles: `:host {display: contents;}`
})
export class NavItem implements AfterViewInit {
  @Input() label: string;
  @Input() subtitle: string;
  @Input() submenu: Array<any>;
  id: string;

  constructor() {
    this.id = _.uniqueId('navitem_');
  }

  ngAfterViewInit(): void {

  }
}
