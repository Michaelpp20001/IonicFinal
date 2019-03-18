//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the PictureServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PictureServiceProvider {
  text="my text";

  constructor(private storage: Storage) {
    console.log('Hello PictureServiceProvider Provider');
  }

}
