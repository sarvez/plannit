import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AttractionsProvider } from "./../../providers/attractions/attractions"
import { TripsProvider } from "../../providers/trips/trips"
import {TimelinePreviewPage} from "../timeline-preview/timeline-preview"
@IonicPage()
@Component({
  selector: 'page-things-to-do',
  templateUrl: 'things-to-do.html',
  providers: [AttractionsProvider, TripsProvider]
})
export class ThingsToDoPage {
  currentTrip: any;
  @ViewChild('mySlider') slider: Slides;
  slides: any = [];
  selectedSegment: string;
  attractions: any[] = []
  filteredAttractions: any[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private AttractionsProvider: AttractionsProvider,
    public TripsProvider: TripsProvider) {
    this.slides = AttractionsProvider.getCategories()
    this.attractions = AttractionsProvider.getAllAttractions()
    this.currentTrip = this.navParams.data["trip"] || TripsProvider.currentTrip;
    console.log(this.currentTrip);
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
    const currentSlide = slider.getActiveIndex() < this.slides.length ? this.slides[slider.getActiveIndex()] : this.slides[this.slides.length - 1];
    this.selectedSegment = currentSlide.id;
    this.filteredAttractions = this.getAttractionsByCategory(currentSlide.title)
  }

  ionViewDidEnter() {
    if (this.slider) {
      const currentSlide = this.slides[0];
      this.selectedSegment = currentSlide.id;
      this.filteredAttractions = this.getAttractionsByCategory(currentSlide.title)
    }
  }

  ionViewDidLoad() {
    if (this.slider) {
      const currentSlide = this.slides[0];
      this.selectedSegment = currentSlide.id;
      this.filteredAttractions = this.getAttractionsByCategory(currentSlide.title)
    }
  }

  getAttractionsByCategory(category: string) {
    return this.attractions.filter(item => (item.type == category || item.tags.indexOf(category) != -1));
  }

  createCustomPlace() {
    console.log("Add custom location.");
  }

  addToTrip(attraction: any) {
    attraction.addedToTrip = !attraction.addedToTrip
  }

  continue() {
    let matchedAttractions = this.attractions.filter(element => {
      return element.addedToTrip
    });
    this.currentTrip.attractions = matchedAttractions;
    this.TripsProvider.currentTrip = this.currentTrip
    this.navCtrl.push(TimelinePreviewPage, {"trip": this.TripsProvider.currentTrip})
  }

}
