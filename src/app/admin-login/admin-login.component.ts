import { Component } from '@angular/core';
import { Router } from '@angular/router';

class AdminDetails {
	constructor(
		public username: string = "",
		public password: string = ""
		){}
};

@Component({
	selector : 'admin-login',
	templateUrl : './admin-login.html',
	styleUrls : ['./admin-login.css']
})

export class AdminLoginComponent{
	constructor(
		private router: Router
		){
	}
	forgotPwd:boolean = false;
	details:AdminDetails = new AdminDetails();
	loginStatus = false;
	adminDetails() {

		if(this.forgotPwd === true){
			alert('Password link has been sent to your registered Email ID');
			this.forgotPwd = false;
			this.loginStatus = false;
		}
		else {
			if(this.details.username === 'admin' && this.details.password === 'admin'){
			this.router.navigateByUrl('/addemployee/add');
			}
			else {
				this.loginStatus = true;
			}
		}
	}

	fogtPwd(){
		this.forgotPwd = true;
	}
	backToLogin(){
		this.forgotPwd = false;
	}

	popUpWindow(){
		var newWin = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");
		newWin.document.write("<button id = 'closeWin' onClick = 'window.close()'>Close Window</button>");
	}
}