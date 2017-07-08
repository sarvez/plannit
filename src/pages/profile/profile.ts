import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

 @ViewChild('Slider') slider: Slides;
  slides: any = [];
  selectedSegment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
      {
        id: "My Story"
      },
      {
        id: "Followers"
      },
      {
        id: "Following"
      }
    ]
  }

  onSegmentChanged(segmentButton) {
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }


  onSlideChanged(slider) {
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
