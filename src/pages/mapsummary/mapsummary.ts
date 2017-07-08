import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mapsummary',
  templateUrl: 'mapsummary.html',
})
export class MapsummaryPage {
  locationInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locationInfo = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsummaryPage');
  }

}
