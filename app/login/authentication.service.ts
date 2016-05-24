import { Injectable } from '@angular/core';
import { RequestApi } from '../common/request-api.service';

@Injectable()
export class AuthenticationService {
	
	private authenticationUrl = 'auth/authenticate';  // URL to web API

	constructor(private api: RequestApi) { }

	public authenticate(email, password, successHandler, errorHandler) {
		var requestBody = {
			email: email,
			password: password
		};
		this.api.post(this.authenticationUrl, requestBody, ).subscribe(
			function(response) {
				successHandler(response);
			},
			function(error) { 
				errorHandler(error);
			}
		);
	}
}