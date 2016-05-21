import { Component } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/common';
import { Utils } from './utils';

@Component({
	selector: 'login-form',
	templateUrl: '/view/registration/login-form.view.html'
})
export class LoginFormComponent { 
	loginForm: any;
	errorMessage = null;

	constructor(formBuilder: FormBuilder) {
		this.loginForm = formBuilder.group({
			'email': ['', Validators.required],
			'password': ['', Validators.required]
		});
	}

	// submitted = false;
	login() {
		if (!this.loginForm.valid) {
			Utils.setFormDirty(this.loginForm);
			this.errorMessage = 'Todos os campos com * são obrigatórios';
		} else {
			this.errorMessage = 'Campo validos';
		}
		// this.submitted = true; 
	}
	// TODO: Remove this when we're done
	// get diagnostic() { return JSON.stringify(this.model); }
}