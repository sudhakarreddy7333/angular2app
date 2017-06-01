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
require("rxjs/add/operator/toPromise");
var add_emp_model_1 = require("../models/add-emp.model");
var http_service_1 = require("../http.service");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(httpService, location, route, router) {
        this.httpService = httpService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.num = 0;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.curRoute = params['id']; });
        this.newEmp = (this.httpService.getDetails()) ? this.httpService.getDetails() : new add_emp_model_1.AddEmpModel();
        $('select').material_select();
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            format: 'dd/mm/yyyy' // Creates a dropdown of 15 years to control year
        });
        $('.tooltipped').tooltip({ delay: 50 });
        this.EmpType = (this.curRoute === 'add') ? "Add Employee" : "Update Employee";
        if (this.curRoute === 'edit') {
            //$('#dept').val(this.newEmp.dept);
            $("#dept").find('option[value=' + this.newEmp.dept + ']').prop('selected', true);
            // re-initialize material-select
            for (var _i = 0, _a = this.newEmp.sports; _i < _a.length; _i++) {
                var x = _a[_i];
                $("#favSport").find('option[value=' + x.split(':')[1] + ']').prop('selected', true);
            }
            ;
            $('#dept,#favSport').material_select();
        }
    };
    AddEmployeeComponent.prototype.ngAfterViewInit = function () {
        $("#dept").val(this.newEmp.dept);
        $("#favSport").val(this.newEmp.sports);
        $("#dept").material_select(this.change.bind(this));
    };
    AddEmployeeComponent.prototype.change = function () {
        this.newEmp.dept = $("#dept").val();
    };
    AddEmployeeComponent.prototype.newEmpDetails = function () {
        var $input = $('.datepicker').pickadate();
        var picker = $input.pickadate('picker');
        this.newEmp.dob = picker.get();
        this.newEmp.sports = $('#favSport').val();
        picker.clear();
        if (this.curRoute === 'add') {
            this.num = this.num + 1;
            this.newEmp.id = this.num;
            if (this.httpService.addemployees(this.newEmp) === "success") {
                console.log("success");
                this.newEmp = new add_emp_model_1.AddEmpModel();
                Materialize.toast('Employee added successfully', 4000);
            }
        }
        else if (this.curRoute === 'edit') {
            if (this.httpService.editEmployee(this.newEmp) === "success") {
                console.log("success");
                this.newEmp = new add_emp_model_1.AddEmpModel();
                this.httpService.clearDetails();
                Materialize.toast('Employee updated successfully', 4000);
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
        common_1.Location,
        router_1.ActivatedRoute,
        router_1.Router])
], AddEmployeeComponent);
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employees.component.js.map