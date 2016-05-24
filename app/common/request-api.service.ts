import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequestApi {
	private baseUrl: string = '';
	private http: Http;

	constructor(http : Http) {
		this.http = http;
	}

	public post(url, body, errorHandler) : Observable<Object> {
		var jsonBody = JSON.stringify(body);
		var headers = new Headers({ 'Content-Type': 'application/json' });
		var options = new RequestOptions({ headers: headers });
		var obs : Observable<Object> = this.http.post(this.baseUrl + url, jsonBody, options)
			.map(response => response.json());
		obs.subscribe(error => errorHandler(error));
		return obs;
	}

	public translateError(error) {
		
	}
}