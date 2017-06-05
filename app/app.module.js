"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var admin_login_component_1 = require("./admin-login/admin-login.component");
var add_employees_component_1 = require("./add-employees/add-employees.component");
var http_service_1 = require("./http.service");
var employee_list_component_1 = require("./employee-list/employee-list.component");
var routing_module_1 = require("./routing-module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            admin_login_component_1.AdminLoginComponent,
            add_employees_component_1.AddEmployeeComponent,
            employee_list_component_1.EmployeeListComponent
        ],
        providers: [http_service_1.AppHttpService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map