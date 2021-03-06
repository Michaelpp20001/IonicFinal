import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public _user: UserServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    //console.log(this._user.appUser)
    this._user.onRegister()
      .subscribe(
        (response: any) => {
          console.log("New User", response.firstName);
          this.goToLogin();
        },  err => {console.log("hit error",err.error)})
  }

  goToLogin() {
    this.navCtrl.parent.select(2);
  }

}
