import { Component } from '@angular/core';

import { FriendsTimelinePage } from '../friends-timeline/friends-timeline';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

import {  NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FriendsTimelinePage;
  tab2Root = HomePage;
  tab3Root = ProfilePage;
  from: string;
  constructor( private NavParams: NavParams, private alertCtrl: AlertController) {
    this.from = this.NavParams.data["from"]
  }

  ionViewDidLoad() {
    if (this.from && this.from == "confirmation") {
      this.showAlert()
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hurray!',
      subTitle: "You've acquired the 'Explorer' badge. Congrats!",
      buttons: ['OK']
    });
    alert.present();
  }
}
