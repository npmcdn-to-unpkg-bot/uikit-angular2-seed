"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var request_api_service_1 = require('./common/request-api.service');
var authentication_service_1 = require('./login/authentication.service');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, request_api_service_1.RequestApi, authentication_service_1.AuthenticationService]);
//# sourceMappingURL=main.js.map