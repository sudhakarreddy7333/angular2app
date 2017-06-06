export class AddEmpModel{
	constructor(
		public name:string = "",
		public email:string = "",
		public dept:string = "",
		public gender:string = "",
		public phoneno:number = null,
		public dob:string = "",
		public id:number = null,
		public sports:any[] = null,
		public termsCondts:boolean = false
		){}
}