//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

class Photo {
  data: any;
  title: any;
  description: any;
}

/*
  Generated class for the PictureServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PictureServiceProvider {

  public photos: Photo[] = [];

  constructor(private storage: Storage, public camera: Camera, public alertCtrl: AlertController) {
    console.log('Hello PictureServiceProvider Provider');
  }

  previewImage: any = this.photos;

  options: CameraOptions = {
    quality: 100,
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
        let prompt = this.alertCtrl.create({
          title: 'New Image',
          message: "Enter a title and description for the new image",
          inputs: [
            {
              name: 'title',
              placeholder: 'Title'
            },
            {
              name: 'description',
              placeholder: 'Description'
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Save',
              handler: data => {
                this.save(data, imageData)
              }
            },
          ]
        });
        prompt.present(); 
      //this.storage.set('photos', this.photos);
    }, (err) => {
        const alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
    });
  }

  deletePhoto(photo) {
    console.log(photo.title, photo.description);
    let result = this.photos.splice( this.photos.findIndex(find => find.data === photo.data), 1);
    console.log("deleted", result[0].title);
    this.set(); 
  }

  set() {
    this.storage.set('photos', this.photos);
  }

  save(data, imageData) {
    console.log(data.title, data.description);
    this.photos.push({
      data: 'data:image/jpeg;base64,' + imageData,
      title: data.title,
      description: data.description
    });
    this.set();
  }

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }
}
