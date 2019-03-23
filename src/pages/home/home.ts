import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PictureServiceProvider } from '../../providers/picture-service/picture-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public _picService: PictureServiceProvider, public _user: UserServiceProvider) {
  }

  takePicture() {
    this._picService.onTakePicture();
  }
}
