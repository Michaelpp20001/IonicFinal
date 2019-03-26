import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { GalleryPage } from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GalleryPage;
  tab3Root = LoginPage;
  tab4Root = RegisterPage;
  constructor(public navCtrl: NavController) {}

}
