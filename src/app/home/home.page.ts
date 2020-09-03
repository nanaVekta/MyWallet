import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 1000,
    autoplay: 5000,
    loop: false
  };

  constructor(private storage: Storage, private navCtrl: NavController) {
    storage.get('token').then((val) => {
      if(!val){
        this.navCtrl.navigateRoot('/welcome');
      }
    });
  }



}
