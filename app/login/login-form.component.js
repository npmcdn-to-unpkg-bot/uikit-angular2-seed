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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var utils_1 = require('../common/utils');
var authentication_service_1 = require('./authentication.service');
var LoginFormComponent = (function () {
    function LoginFormComponent(formBuilder, router, authService) {
        this.errorMessage = null;
        this.loginForm = formBuilder.group({
            'email': ['', common_1.Validators.required],
            'password': ['', common_1.Validators.required]
        });
        this.storage = localStorage;
        this.router = router;
        this.authService = authService;
    }
    LoginFormComponent.prototype.hideMessage = function () {
        this.errorMessage = null;
        return false;
    };
    // submitted = false;
    LoginFormComponent.prototype.login = function () {
        if (this.loginForm.valid) {
            this.authService.authenticate(this.loginForm.value.email, this.loginForm.value.password, function (response) {
                alert('response 2: ' + response.body);
            }, function (error) {
                alert('error 3: ' + error._body);
            });
        }
        else {
            utils_1.Utils.setFormDirty(this.loginForm);
            this.errorMessage = 'Todos os campos com * são obrigatórios';
        }
        // this.submitted = true; 
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: '/view/registration/login-form.view.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, authentication_service_1.AuthenticationService])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map