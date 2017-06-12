import { Component, OnInit } from '@angular/core';
import { AddEmpModel } from '../models/add-emp.model';
import { AppHttpService } from '../http.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/observable/of';

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
	 public customSelected:string;
  public statesComplex:any[] = [
    {id: 1, name: 'Telangana', region: 'South'}, {id: 2, name: 'Karnataka', region: 'West'}, {id: 3, name: 'Odisha', region: 'West'},
    {id: 4, name: 'Kolkata', region: 'South'}, {id: 5, name: 'Tamil Nadu', region: 'West'},
    {id: 6, name: 'Gujarat', region: 'West'}, {id: 7, name: 'Punjab', region: 'Northeast'},
    {id: 8, name: 'Andhra Pradesh', region: 'South'}, {id: 9, name: 'Maharasatra', region: 'South'}
    ];

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