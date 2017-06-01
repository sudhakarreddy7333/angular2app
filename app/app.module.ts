import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployeeComponent } from './add-employees/add-employees.component';
import { AppHttpService } from './http.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {AppRoutingModule} from './routing-module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [ 
	  BrowserModule,
	  FormsModule,
	  AppRoutingModule,
	  HttpModule,
	  InMemoryWebApiModule.forRoot(InMemoryDataService),
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
