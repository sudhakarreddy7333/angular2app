import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showLinks: boolean = false;
  constructor(
  	private httpService: AppHttpService) { 
  	this.httpService.showNavbarLinksEmitter.subscribe((mode)=>{
  		if(mode !== null){
  			this.showLinks = mode;
  		}
  	})
  }

  ngOnInit() {
  }

}
