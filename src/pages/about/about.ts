import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PictureServiceProvider } from '../../providers/picture-service/picture-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private _picture: PictureServiceProvider) {


  }

}
