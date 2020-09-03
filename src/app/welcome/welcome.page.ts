import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick(){
    this.storage.set('token', {name: 'User'});
    this.navCtrl.navigateForward('/home');
  }

}
