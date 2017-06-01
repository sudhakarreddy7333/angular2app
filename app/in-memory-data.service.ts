import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
createDb(){
	let addemployees = [{
		"name" : "",
		"email" : "",
		"dept" : "",
		"gender" : "",
		"phoneno" : "",
		"dob" : "",
		"id" : ""
	}];
	return {addemployees};
}
}