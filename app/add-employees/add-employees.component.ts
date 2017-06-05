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

	ngOnInit(){
		this.route.params.subscribe(params => this.curRoute = params['id']);
		this.newEmp = (this.httpService.getDetails()) ? this.httpService.getDetails() : new AddEmpModel();
		$('select').material_select();
		$('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		    selectYears: 15,
		    format:'dd/mm/yyyy' // Creates a dropdown of 15 years to control year
  		});
		$('.tooltipped').tooltip({delay: 50});
		this.EmpType = (this.curRoute === 'add') ? "Add Employee" : "Update Employee";
	        if(this.curRoute === 'edit'){
	        	//$('#dept').val(this.newEmp.dept);
	        	$("#dept").find('option[value='+this.newEmp.dept+']').prop('selected', true);
		        // re-initialize material-select
		        for(let x of this.newEmp.sports){
		        	$("#favSport").find('option[value='+x.split(':')[1]+']').prop('selected', true);
		        };

		        $('#dept,#favSport').material_select();
	        }
	}
	ngAfterViewInit() {
		$("#dept").val(this.newEmp.dept);
		$("#favSport").val(this.newEmp.sports);
    	$("#dept").material_select(this.change.bind(this));
	}

	change() {
    	this.newEmp.dept = $("#dept").val();
	}

	newEmpDetails(){

		var $input = $('.datepicker').pickadate()
			var picker = $input.pickadate('picker');
			this.newEmp.dob = picker.get();
			this.newEmp.sports = $('#favSport').val();
			picker.clear();
		if(this.curRoute === 'add'){
			this.num = this.num+1;
			this.newEmp.id =this.num;
			if(this.httpService.addemployees(this.newEmp) === "success"){
				console.log("success");
				this.newEmp = new AddEmpModel();
				$("#dept").val(this.newEmp.dept);
				$("#favSport").val(this.newEmp.sports);
				$('#dept,#favSport').material_select();
				 Materialize.toast('Employee added successfully', 4000)
			}
		}
		else if(this.curRoute === 'edit'){
			if(this.httpService.editEmployee(this.newEmp) === "success"){
				console.log("success");
				this.newEmp = new AddEmpModel();
				this.httpService.clearDetails();
				Materialize.toast('Employee updated successfully', 4000)
				this.router.navigateByUrl('/employeelist');
			}
		}	
	}
}