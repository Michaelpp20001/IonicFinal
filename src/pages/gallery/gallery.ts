import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PictureServiceProvider } from '../../providers/picture-service/picture-service';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _picService: PictureServiceProvider) {
  }

  onDeletePhoto(photo) {
    this._picService.deletePhoto(photo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  ngOnInit() {
    this._picService.loadSaved();
  }
}
