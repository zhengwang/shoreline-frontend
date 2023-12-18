import { Component, Input } from '@angular/core';

@Component({
  selector: 'LogoutIcon',
  template: `<i class="fas fa-sign-out-alt fa-sm fa-fw" [ngClass]="cls"></i>`,
  styles: ``
})
export class LogoutIcon {
  @Input() cls;
}
