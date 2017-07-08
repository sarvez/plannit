import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AttractionsProvider } from "./../../providers/attractions/attractions"
import { Platform, ViewController } from 'ionic-angular';
import { TripsProvider } from "../../providers/trips/trips"
@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
  providers: [AttractionsProvider]
})
export class NearbyPage {
  attractions: any[] = []
  currentTrip: any;
  constructor(public navCtrl: NavController, public platform: Platform, public viewCtrl: ViewController, public navParams: NavParams, private AttractionsProvider: AttractionsProvider,
  public TripsProvider: TripsProvider) {
    this.attractions = AttractionsProvider.getAllAttractions()
    this.currentTrip = TripsProvider.currentTrip || {};
    this.platform.registerBackButtonAction(() => {
      try {
        this.viewCtrl.dismiss()
      } catch (e) {
        
      }
    });
  }

  ionViewDidLoad() {

  }

  addToTrip(attraction: any) {
    attraction.addedToTrip = !attraction.addedToTrip
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
