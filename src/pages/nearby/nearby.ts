import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {AttractionsProvider} from "./../../providers/attractions/attractions"
import { Platform, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
  providers: [AttractionsProvider]
})
export class NearbyPage {
  attractions: any[] = []

  constructor(public navCtrl: NavController, public platform: Platform, public viewCtrl: ViewController, public navParams: NavParams, private AttractionsProvider: AttractionsProvider) {
    this.attractions = AttractionsProvider.getAllAttractions()

    this.platform.registerBackButtonAction(() => {
      try {
        this.viewCtrl.dismiss()
      } catch(e) {

      }
    });
  }

  ionViewDidLoad() {
    
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
