//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

//Generate class for Photos

class Photo {
  data: any;
  title: any;
  description: any;
}

@Injectable()
export class PictureServiceProvider {

  constructor(
    private storage: Storage,
    public camera: Camera, 
    public alertCtrl: AlertController
    ) {
    console.log('Hello PictureServiceProvider Provider');
  }

    //create an empty photos array of new instances of Photos class
    public photos: Photo[] = [];

    //empty preview image to push current selected image from gallery into the home view
    previewImage: Photo[] = [];
 

  //define camera and picture options
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    correctOrientation: true
  }
  //Takes a picture using native, uses prompt alert with two inputs, and saves to storage
  onTakePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
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
        //creates an error alert if no image selected or failed action
    }, (err) => {
        const alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
    });
  }
  //removes current selected photo from gallery and returns/sets rest of photos array
  deletePhoto(photo) {
    console.log(photo.title, photo.description);
      let confirm = this.alertCtrl.create({
        title: 'Delete forever?',
        message: 'Are you sure you want to permanently delete this photo?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Delete',
            handler: () => {
              let result = this.photos.splice( this.photos.findIndex(find => find.data === photo.data), 1);
              console.log("deleted", result[0].title);
              this.set();
            }
          }
        ]
      });
      confirm.present();
    }
  
  //resets storage key and value of photos
  set() {
    this.storage.set('photos', this.photos);
  }
  //saves a current image to storage, and sets key value
  save(data, imageData) {
    console.log(data.title, data.description);
    this.photos.push({
      data: 'data:image/jpeg;base64,' + imageData,
      title: data.title,
      description: data.description
    });
    this.set();
  }
  //gets all photos from storage
  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

}
