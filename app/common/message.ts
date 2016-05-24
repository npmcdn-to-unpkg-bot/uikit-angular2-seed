import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequestApi {
	private baseUrl: string = 'http://dev.time.ly:888/api/';
	private http: Http;

	constructor(http : Http) {
		this.http = http;
	}
	public post(url, body) : Observable<Object> {
		var jsonBody = JSON.stringify(body);
		var headers = new Headers({ 'Content-Type': 'application/json' });
		var options = new RequestOptions({ headers: headers });
		return this.http.post(this.baseUrl + url, jsonBody, options)
			.map(response => response.json());
	}
}