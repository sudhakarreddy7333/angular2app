"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_employees_component_1 = require("./add-employees/add-employees.component");
var admin_login_component_1 = require("./admin-login/admin-login.component");
var employee_list_component_1 = require("./employee-list/employee-list.component");
var routes = [
    {
        "path": "addemployee/:id",
        "component": add_employees_component_1.AddEmployeeComponent
    },
    {
        "path": "login",
        "component": admin_login_component_1.AdminLoginComponent
    },
    {
        "path": "employeelist",
        "component": employee_list_component_1.EmployeeListComponent
    },
    {
        "path": "", "redirectTo": "/login", "pathMatch": "full"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=routing-module.js.map