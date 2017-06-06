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
var add_emp_model_1 = require("./models/add-emp.model");
var AppHttpService = (function () {
    function AppHttpService() {
        this.empDetails = [];
    }
    AppHttpService.prototype.addemployees = function (emp) {
        this.empDetails.push(emp);
        return "success";
    };
    AppHttpService.prototype.getEmployees = function () {
        return this.empDetails;
    };
    AppHttpService.prototype.detailsObj = function (obj) {
        this.detailsObjct = obj;
    };
    AppHttpService.prototype.getDetails = function () {
        return this.detailsObjct;
    };
    AppHttpService.prototype.clearDetails = function () {
        this.detailsObjct = new add_emp_model_1.AddEmpModel();
    };
    AppHttpService.prototype.editEmployee = function (empd) {
        var _this = this;
        this.empDetails.forEach(function (emp, inx) {
            if (emp.id === empd.id) {
                _this.empDetails[inx] = empd;
            }
        });
        return "success";
    };
    AppHttpService.prototype.deleteEmp = function (empId) {
        this.empDetails = this.empDetails.filter(function (emp) {
            return emp.id != empId;
        });
        return this.empDetails;
    };
    return AppHttpService;
}());
AppHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppHttpService);
exports.AppHttpService = AppHttpService;
//# sourceMappingURL=http.service.js.map