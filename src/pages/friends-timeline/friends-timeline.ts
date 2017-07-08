import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TripsProvider } from "../../providers/trips/trips"
import { MapsummaryPage } from "../mapsummary/mapsummary";
import { TimelinePage } from "../timeline/timeline";
import { NearbyPage } from "../nearby/nearby";

@IonicPage()
@Component({
  selector: 'page-friends-timeline',
  templateUrl: 'friends-timeline.html',
})
export class FriendsTimelinePage {
  userTrips: any = [];

  constructor(public navCtrl: NavController, public TripsProvider: TripsProvider, public ModalController: ModalController,  public navParams: NavParams) {
    this.userTrips = TripsProvider.getTrips()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsTimelinePage');
  }

  openModal(params: any) {
    let modal = this.ModalController.create(MapsummaryPage, params);
    modal.present();
  }
  goToTimeLine(item: any) {
    this.navCtrl.push(TimelinePage, item);
  }
  goToNearbyPage(item: any) {
    let modal = this.ModalController.create(NearbyPage, item);
    modal.present();
    //this.navCtrl.push(NearbyPage, item);
  }

}
