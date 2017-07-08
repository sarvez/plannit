import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttractionsProvider } from "./../../providers/attractions/attractions"
import { TripsProvider } from "../../providers/trips/trips"
import {ConfirmationScreenPage} from "./../confirmation-screen/confirmation-screen"
/**
 * Generated class for the TimelinePreviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timeline-preview',
  templateUrl: 'timeline-preview.html',
  providers: [TripsProvider, AttractionsProvider]
})
export class TimelinePreviewPage {
  currentTrip: any;
  attractions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private AttractionsProvider: AttractionsProvider,
    public TripsProvider: TripsProvider) {
    this.attractions = AttractionsProvider.getAllAttractions()
    this.currentTrip = this.navParams.data["trip"] || TripsProvider.currentTrip;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePreviewPage');
  }

  addToTrip(attraction) {
        attraction.addedToTrip = !attraction.addedToTrip
        attraction.removedFromItenary = attraction.addedToTrip;
  }

  continue() {
    this.navCtrl.push(ConfirmationScreenPage)
  }

}
