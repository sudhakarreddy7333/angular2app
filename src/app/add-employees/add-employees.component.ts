import { Component, OnInit } from '@angular/core';
import { AddEmpModel } from '../models/add-emp.model';
import { AppHttpService } from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector : 'add-employees',
	templateUrl : './add-employees.html'
})

export class AddEmployeeComponent implements OnInit{
	constructor(
		private httpService: AppHttpService,
		private route: ActivatedRoute,
		private router: Router
		){}
	newEmp: AddEmpModel;
	num:number = 0;
	curRoute:String | null;
	EmpType:String | null;
	addEmpStatus:boolean = false;

	ngOnInit(){
		this.route.params.subscribe(params => this.curRoute = params['id']);
		this.newEmp = (this.httpService.getDetails()) ? this.httpService.getDetails() : new AddEmpModel();
		this.EmpType = (this.curRoute === 'add') ? "Add Employee" : "Update Employee";
	}

	newEmpDetails(addEmp){
		if(this.curRoute === 'add'){
			this.num = this.num+1;
			this.newEmp.id =this.num;
			if(this.httpService.addemployees(this.newEmp) === "success"){
				console.log("success");
				this.newEmp = new AddEmpModel();
				this.addEmpStatus = true;
				addEmp.resetForm();
			}
		}
		else if(this.curRoute === 'edit'){
			if(this.httpService.editEmployee(this.newEmp) === "success"){
				console.log("success");
				this.newEmp = new AddEmpModel();
				this.httpService.clearDetails();
				this.router.navigateByUrl('/employeelist');
			}
		}	
	}
}