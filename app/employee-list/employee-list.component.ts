import { Component, OnInit } from '@angular/core';
import { AddEmpModel } from '../models/add-emp.model';
import { AppHttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.html',
})

export class EmployeeListComponent implements OnInit {
	emplist:AddEmpModel[];
	constructor(
		private httpService: AppHttpService,
		private router: Router
		){}
	ngOnInit(){
		this.emplist = this.httpService.getEmployees();
		$('.tooltipped').tooltip({delay: 50});
	}
	editEmp(emp:AddEmpModel){
		this.httpService.detailsObj(emp);
		this.router.navigateByUrl('/addemployee/edit');
		//this.emplist = this.httpService.editEmp(emp);
	}
	deleteEmp(empId:number){
		this.emplist = this.httpService.deleteEmp(empId);
		Materialize.toast('Employee Deleted successfully', 4000)
	}

}