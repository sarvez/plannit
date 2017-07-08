import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttractionsProvider } from "./../../providers/attractions/attractions"
import { TripsProvider } from "../../providers/trips/trips"
import {TabsPage} from "../tabs/tabs"

@IonicPage()
@Component({
  selector: 'page-confirmation-screen',
  templateUrl: 'confirmation-screen.html',
})
export class ConfirmationScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationScreenPage');
  }

  sharePublic() {

  }

  sharePrivate() {

  }

  goToHome() {
    this.navCtrl.setRoot(TabsPage, {"from": "confirmation"})
  }
}
