import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'AppNavbar',
  template: `
    <header class="relative bg-white dark:bg-darker">
      <div class="flex items-center justify-between p-2 border-b dark:border-primary-darker">
        <a href="index.html" class="inline-block text-2xl font-bold tracking-wider uppercase text-primary-dark dark:text-light">
          K-WD
        </a>

        <nav class="hidden space-x-2 md:flex md:items-center">
          <Notificate />
          <div><Avatar /></div>
        </nav>
      </div>
    </header>
  `,
  styles: []
})
export class Navbar implements OnInit {

  constructor(
    private apiService: ApiService,
    private _route: Router) { }

  ngOnInit(): void {
    // this.apiService.fetchData('/api/user').subscribe({
    //   error: err => {
    //     if (err instanceof HttpErrorResponse &&
    //       err.status == 401) {
    //       this._route.navigate(['/signin']);
    //     }
    //   }
    // });
  }
}
