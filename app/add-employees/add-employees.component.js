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
var add_emp_model_1 = require("../models/add-emp.model");
var http_service_1 = require("../http.service");
var router_1 = require("@angular/router");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(httpService, route, router) {
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.num = 0;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.curRoute = params['id']; });
        this.newEmp = (this.httpService.getDetails()) ? this.httpService.getDetails() : new add_emp_model_1.AddEmpModel();
        this.EmpType = (this.curRoute === 'add') ? "Add Employee" : "Update Employee";
    };
    AddEmployeeComponent.prototype.newEmpDetails = function () {
        if (this.curRoute === 'add') {
            this.num = this.num + 1;
            this.newEmp.id = this.num;
            if (this.httpService.addemployees(this.newEmp) === "success") {
                console.log("success");
                this.newEmp = new add_emp_model_1.AddEmpModel();
            }
        }
        else if (this.curRoute === 'edit') {
            if (this.httpService.editEmployee(this.newEmp) === "success") {
                console.log("success");
                this.newEmp = new add_emp_model_1.AddEmpModel();
                this.httpService.clearDetails();
                this.router.navigateByUrl('/employeelist');
            }
        }
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'add-employees',
        templateUrl: './add-employees.html'
    }),
    __metadata("design:paramtypes", [http_service_1.AppHttpService,
        router_1.ActivatedRoute,
        router_1.Router])
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employees.component.js.map