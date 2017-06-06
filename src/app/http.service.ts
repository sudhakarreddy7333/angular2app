import { Injectable } from '@angular/core';
import { AddEmpModel } from './models/add-emp.model';

@Injectable()
export class AppHttpService{

	empDetails:AddEmpModel[] = [];
	detailsObjct:AddEmpModel;

	constructor(){}

	addemployees(emp:AddEmpModel){
		this.empDetails.push(emp);
		return "success";
    }

    getEmployees():AddEmpModel[]{
    	return this.empDetails;
    }

    detailsObj(obj:AddEmpModel):void{
    	this.detailsObjct = obj;
    }

    getDetails():AddEmpModel{
    	return this.detailsObjct;
    }

    clearDetails():void{
    	this.detailsObjct = new AddEmpModel();
    }

    editEmployee(empd:AddEmpModel):string{
    	this.empDetails.forEach((emp,inx) => {
    		if(emp.id === empd.id){
    			this.empDetails[inx] = empd;
    		}
    	})
    	return "success";
    }

    deleteEmp(empId:number):AddEmpModel[]{
    	this.empDetails = this.empDetails.filter(emp => {
    		return emp.id != empId;
    	})
    	return this.empDetails;
    }
}