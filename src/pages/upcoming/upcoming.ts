import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'planit-upcoming',
  templateUrl: 'upcoming.html'
})
export class UpcomingPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

}
