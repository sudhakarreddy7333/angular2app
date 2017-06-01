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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../http.service");
var router_1 = require("@angular/router");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.emplist = this.httpService.getEmployees();
        $('.tooltipped').tooltip({ delay: 50 });
    };
    EmployeeListComponent.prototype.editEmp = function (emp) {
        this.httpService.detailsObj(emp);
        this.router.navigateByUrl('/addemployee/edit');
        //this.emplist = this.httpService.editEmp(emp);
    };
    EmployeeListComponent.prototype.deleteEmp = function (empId) {
        this.emplist = this.httpService.deleteEmp(empId);
        Materialize.toast('Employee Deleted successfully', 4000);
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        templateUrl: './employee-list.html',
    }),
    __metadata("design:paramtypes", [http_service_1.AppHttpService,
        router_1.Router])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map