import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  appUser: any = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  

}
