import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';
import { CreatePage } from "../create/create"
import { ModalController } from 'ionic-angular';
import { MapsummaryPage } from "../mapsummary/mapsummary";
import { TimelinePage } from "../timeline/timeline";
import { NearbyPage } from "../nearby/nearby";
import { AlertController } from 'ionic-angular';

import { TripsProvider } from "../../providers/trips/trips"
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TripsProvider]
})
export class HomePage implements AfterViewInit {

  @ViewChild('mySlider') slider: Slides;

  selectedSegment: string = "current";
  slides: any = [];
  userTrips: any = [];
  currentTrip: any;
  pastTrips: any[];
  upcomigtrips: any[];
  from: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public TripsProvider: TripsProvider, public ModalController: ModalController) {
    this.selectedSegment = 'current';
    this.slides = [
      {
        id: "past",
        title: "Past"
      },
      {
        id: "current",
        title: "Current"
      },
      {
        id: "upcoming",
        title: "Upcoming"
      }
    ];
    this.userTrips = TripsProvider.getTrips();
    this.upcomigtrips = this.getUpcomingTrips() || [];
    this.currentTrip = this.getCurrentTrips() || {};
    this.TripsProvider.currentTrip = this.currentTrip || {}
    this.pastTrips = this.getPastTrips() || [];
    this.from = this.navParams.data["from"]

  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }

  ionViewDidEnter() {
    if (this.slider) {
      const currentSlide = this.slides[1];
      this.selectedSegment = currentSlide.id;
    }
  }

  ionViewDidLoad() {
    if (this.slider) {
      const currentSlide = this.slides[1];
      this.selectedSegment = currentSlide.id;
    }
    setTimeout(() => {
      this.scrollTo(3);
    }, 1000);
    if (this.from && this.from == "confirmation") {
      this.showAlert()
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hurray!',
      subTitle: "You've acquired the 'Explorer' badge. Congrats!",
      buttons: ['OK']
    });
    alert.present();
  }

  createTrip() {
    this.navCtrl.push(CreatePage)
  }

  getCurrentTrips() {

    let filteredTrips = this.userTrips.filter(item => new Date(item.plannedDate).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0))
    if (filteredTrips.length >= 0) {
      this.currentTrip = filteredTrips[0] || {}
      return this.currentTrip
    }
  }
  getPastTrips() {
    let filteredTrips = this.userTrips.filter(item => new Date(item.plannedDate).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0))
    if (filteredTrips.length >= 0) {
      this.pastTrips = filteredTrips || []
      return this.pastTrips
    }
  }

  getUpcomingTrips() {
    let filteredTrips = this.userTrips.filter(item => new Date(item.plannedDate).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0))
    if (filteredTrips.length >= 0) {
      this.upcomigtrips = filteredTrips || []
      return this.upcomigtrips
    }
  }

  ngAfterViewInit() {
    this.slider.initialSlide = 1
  }
  openModal(params: any) {
    let modal = this.ModalController.create(MapsummaryPage, params);
    modal.present();
  }
  goToTimeLine(item: any) {
    this.navCtrl.push(TimelinePage, item);
  }
  goToNearbyPage(item: any) {
    this.TripsProvider.currentTrip = item
    let modal = this.ModalController.create(NearbyPage, item);
    modal.present();
    //this.navCtrl.push(NearbyPage, item);
  }
  scrollTo(itemIndex: number) {
    if ($("#timeline-item-sd-" + itemIndex) != null && $("#timeline-item-sd-" + itemIndex).offset() != null) {
      $(".activeTrips .slide-zoom").animate({
        scrollTop: $("#timeline-item-sd-" + itemIndex).offset().top
      },
        'slow')
    }
  }
}

