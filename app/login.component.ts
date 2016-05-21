import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { LoginFormComponent } from './login-form.component';

@Component({
	selector: 'login',
	templateUrl: '/view/registration/login.view.html',
	directives: [ROUTER_DIRECTIVES]
})

@Routes([
	{ path: '/signin', component: LoginFormComponent }
])

export class LoginComponent { 
	private router: Router;
	constructor(router: Router) {
		this.router = router;
	}
	ngOnInit() {
		this.router.navigate(['/login/signin']);
	}
}