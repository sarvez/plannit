import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimelinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  currentTrip: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentTrip = this.navParams.data || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

  isPastEvent(trip: any) {
    return new Date(trip.plannedDate).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)
  }

  isFutureEvent(trip: any) {
    return new Date(trip.plannedDate).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)
  }

  isCurrentEvent(trip: any) {
    return new Date(trip.plannedDate).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)
  }
}
