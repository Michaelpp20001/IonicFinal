//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the PictureServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PictureServiceProvider {

  constructor(private storage: Storage, public camera: Camera, public alertCtrl: AlertController) {
    console.log('Hello PictureServiceProvider Provider');
  }

  myPicture: any;
  myText: string = "hello picture service";

  options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    correctOrientation: true
  }

  onTakePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myPicture = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        const alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
    });
  }

}
