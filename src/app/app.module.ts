import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployeeComponent } from './add-employees/add-employees.component';
import { AppHttpService } from './http.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {AppRoutingModule} from './routing-module';
import { enableProdMode } from '@angular/core';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  imports:      [ 
	  BrowserModule,
	  FormsModule,
	  AppRoutingModule
   ],
  declarations: [ 
	  AppComponent,
	  AdminLoginComponent,
	  AddEmployeeComponent,
	  EmployeeListComponent
   ],
  providers : [AppHttpService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }