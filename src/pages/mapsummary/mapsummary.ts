import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Platform, NavParams, ViewController } from 'ionic-angular';

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
  locationInfo: any;

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, public viewCtrl: ViewController) {
    this.locationInfo = navParams.data;

    this.platform.registerBackButtonAction(() => {
      try {
        this.viewCtrl.dismiss()
      } catch(e) {

      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsummaryPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
