"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var RequestApi = (function () {
    function RequestApi(http) {
        this.baseUrl = '';
        this.http = http;
    }
    RequestApi.prototype.post = function (url, body, successHandler, errorHandler) {
        var jsonBody = JSON.stringify(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var obs = this.http.post(this.baseUrl + url, jsonBody, options)
            .map(function (response) { return response.json(); });
        obs.subscribe(function (response) {
            successHandler(response);
        }, function (error) {
            alert(error._body);
            var obj = JSON.parse(error._body);
        });
        return obs;
    };
    RequestApi = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RequestApi);
    return RequestApi;
}());
exports.RequestApi = RequestApi;
//# sourceMappingURL=request-api.service.js.map