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
var router_1 = require('@angular/router');
var AdminDetails = (function () {
    function AdminDetails(username, password) {
        if (username === void 0) { username = ""; }
        if (password === void 0) { password = ""; }
        this.username = username;
        this.password = password;
    }
    return AdminDetails;
}());
;
var AdminLoginComponent = (function () {
    function AdminLoginComponent(router) {
        this.router = router;
        this.forgotPwd = false;
        this.details = new AdminDetails();
        this.loginStatus = false;
    }
    AdminLoginComponent.prototype.adminDetails = function () {
        if (this.forgotPwd === true) {
            alert('Password link has been sent to your registered Email ID');
            this.forgotPwd = false;
            this.loginStatus = false;
        }
        else {
            if (this.details.username === 'admin' && this.details.password === 'admin') {
                this.router.navigateByUrl('/addemployee/add');
            }
            else {
                this.loginStatus = true;
            }
        }
    };
    AdminLoginComponent.prototype.fogtPwd = function () {
        this.forgotPwd = true;
    };
    AdminLoginComponent.prototype.backToLogin = function () {
        this.forgotPwd = false;
    };
    AdminLoginComponent.prototype.popUpWindow = function () {
        var newWin = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");
        newWin.document.write("<button id = 'closeWin' onClick = 'window.close()'>Close Window</button>");
    };
    AdminLoginComponent = __decorate([
        core_1.Component({
            selector: 'admin-login',
            templateUrl: './admin-login.html',
            styleUrls: ['./admin-login.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
exports.AdminLoginComponent = AdminLoginComponent;
//# sourceMappingURL=admin-login.component.js.map