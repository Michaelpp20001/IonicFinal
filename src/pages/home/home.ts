import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PictureServiceProvider } from '../../providers/picture-service/picture-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public _picService: PictureServiceProvider) {
  }

  takePicture() {
    this._picService.onTakePicture();
  }
}
