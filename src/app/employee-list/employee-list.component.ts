import { Component, OnInit,ViewChild } from '@angular/core';
import { AddEmpModel } from '../models/add-emp.model';
import { AppHttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.html',
})

export class EmployeeListComponent implements OnInit {
	emplist:AddEmpModel[];
	emplId:number;
	@ViewChild('modal') deletemodal;
	constructor(
		private httpService: AppHttpService,
		private router: Router
		){}
	ngOnInit(){
		this.emplist = this.httpService.getEmployees();
	}
	editEmp(emp:AddEmpModel){
		this.httpService.detailsObj(emp);
		this.router.navigateByUrl('/employee/edit');
	}
	deleteEmp(empId:number){
		this.deletemodal.open();
		this.emplId = empId;
	}
	conFDeleteEmp(){
		this.emplist = this.httpService.deleteEmp(this.emplId);
		this.deletemodal.close();
	}
}