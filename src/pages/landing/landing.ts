import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {TabsPage} from "./../tabs/tabs"
import {UserProvider} from "./../../providers/user/user"

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage implements AfterViewInit{
  @ViewChild('Slides') slider: Slides;
  slideOptions = {
    initialSlide: 0,
    loop: true,
    autoplay:1000
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenticationProvider: UserProvider,
  ) {
  }

  ngAfterViewInit() {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToDashboard() {
      this.navCtrl.setRoot(TabsPage);
  }

  doFacebookLogin() {
    this.navCtrl.setRoot(TabsPage);
  }
}
