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

  loggedIn: boolean = false;

  apiBaseUrl: string = "http://localhost:3000/api/appUsers";

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  onRegister() {
    return this.http.post(this.apiBaseUrl, this.appUser)
  }

  onLogIn() {
    return this.http.post(this.apiBaseUrl + "/login", this.appUser)
  }
  

}
