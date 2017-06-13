import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employees/add-employees.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
	{
		"path" : "employee/:id",
		"component" : AddEmployeeComponent
	},
	{
		"path" : "login",
		"component" : AdminLoginComponent
	},
	{
		"path" : "employeelist",
		"component" : EmployeeListComponent
	},
	{   
        "path" : "", "redirectTo" : "/login","pathMatch" : "full"
    }
];
@NgModule({
	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule] 
})

export class AppRoutingModule{}