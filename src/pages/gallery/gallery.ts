import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PictureServiceProvider } from '../../providers/picture-service/picture-service';
import { ToastController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public _picService: PictureServiceProvider,
    public toastCtrl: ToastController
    ) {
  }

  previewImage(photo) {
    console.log("clicked", photo.title);
    this._picService.previewImage = photo;
    this.goToHome();
  }

  onDeletePhoto(photo) {
    this._picService.deletePhoto(photo);
  }

  goToHome() {
    this.navCtrl.parent.select(0);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Dont you dare do it!!',
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  ngOnInit() {
    this._picService.loadSaved();
  }
}
