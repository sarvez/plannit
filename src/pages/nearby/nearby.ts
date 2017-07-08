import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import {AttractionsProvider} from "./../../providers/attractions/attractions"

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
  providers: [AttractionsProvider]
})
export class NearbyPage {
  @ViewChild('mySlider') slider: Slides;
  slides: any = [];
  selectedSegment: string;
  attractions: any[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private AttractionsProvider: AttractionsProvider) {
    this.slides = AttractionsProvider.getCategories()
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
    const currentSlide = slider.getActiveIndex() < this.slides.length ? this.slides[slider.getActiveIndex()] : this.slides[this.slides.length-1]  ;
    this.selectedSegment = currentSlide.id;
  }

  ionViewDidEnter() {
    if (this.slider) {
      const currentSlide = this.slides[0];
      this.selectedSegment = currentSlide.id;
    }
  }

  ionViewDidLoad() {
    if (this.slider) {
      const currentSlide = this.slides[0];
      this.selectedSegment = currentSlide.id;
    }
  }

}
