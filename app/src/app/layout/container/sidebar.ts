import { Component } from '@angular/core';

@Component({
  selector: 'Sidebar',
  template: `
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <Brand />
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
          <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
          Interface
      </div>
      <NavItem
        *ngFor="let item of navitems"
        [label]="item.label"
        [subtitle]="item.subtitle"
        [submenu]="item.submenu"/>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <!-- Sidebar Message -->
      <div class="sidebar-card d-none d-lg-flex">
          <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="...">
          <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
          <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
      </div>

    </ul>
  `,
  styles: ``
})
export class Sidebar {
  navitems: any;

  constructor() {
    this.navitems = [
      {
        label: 'warehouse',
        subtitle: 'stock',
        submenu: [
          { label: 'film', url: '/dashboard' },
          { label: 'actor', url: '/dashboard'}
        ]
      }
    ]
  }
}
