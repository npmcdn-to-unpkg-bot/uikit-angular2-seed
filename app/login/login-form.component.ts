import { Component } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/common';
import { Router } from '@angular/router';

import { Utils } from '../common/utils';
import { AuthenticationService } from './authentication.service';

@Component({
	selector: 'login-form',
	templateUrl: '/view/registration/login-form.view.html'
})
export class LoginFormComponent { 
	public loginForm: any;
	public errorMessage = null;
	private storage: any;
	private router: Router;
	private authService: AuthenticationService;

	constructor(formBuilder: FormBuilder, router : Router, authService : AuthenticationService) {
		this.loginForm = formBuilder.group({
			'email': ['', Validators.required],
			'password': ['', Validators.required]
		});
		this.storage = localStorage;
		this.router = router;
		this.authService = authService;
	}	

	hideMessage() {
		this.errorMessage = null;
		return false;
	}

	// submitted = false;
	login() {
		if (this.loginForm.valid) {
			this.authService.authenticate(
				this.loginForm.value.email,
				this.loginForm.value.password,
				function(response) {
					alert('response 2: ' + response.body);
				},
				function(error) {
					alert('error 3: ' + error._body);		
				}
			);
		} else {
			Utils.setFormDirty(this.loginForm);
			this.errorMessage = 'Todos os campos com * são obrigatórios';
		}
		// this.submitted = true; 
	}
	// TODO: Remove this when we're done
	// get diagnostic() { return JSON.stringify(this.model); }
}