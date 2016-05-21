import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';

@Component({
	selector: 'my-app',
  template: '<router-outlet></router-outlet>', 
	directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/login', component: LoginComponent },
	{ path: '/home', component: HomeComponent }
])

export class AppComponent implements OnInit {
  private router: Router;
  constructor(router: Router) { 
    this.router = router;
  }
	ngOnInit() {
		this.router.navigate(['/login']);
	}
}