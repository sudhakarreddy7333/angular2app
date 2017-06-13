import { Injectable } from '@angular/core';
import { AddEmpModel } from './models/add-emp.model';

@Injectable()
export class AppHttpService{

	empDetails:AddEmpModel[] = [];
	detailsObjct:AddEmpModel;
    statesList:any[] = [
        {id: 1, name: 'Telangana', region: 'South'}, 
        {id: 2, name: 'Karnataka', region: 'West'}, 
        {id: 3, name: 'Odisha', region: 'West'},
        {id: 4, name: 'Kolkata', region: 'South'}, 
        {id: 5, name: 'Tamil Nadu', region: 'West'},
        {id: 6, name: 'Gujarat', region: 'West'}, 
        {id: 7, name: 'Punjab', region: 'Northeast'},
        {id: 8, name: 'Andhra Pradesh', region: 'South'}, 
        {id: 9, name: 'Maharasatra', region: 'South'}
    ];
    private depts:string[] = ["ECE", "EEE", "IT", "CSE", "MECH","AERO"];
    private sports:string[] = ["Cricket", "Football", "Volleyball", "Chess", "Tennis"];

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

    getStatesList():string[]{
        return this.statesList;
    }
    getDepts():string[]{
        return this.depts;
    }
    getSports():string[]{
        return this.sports;
    }
}