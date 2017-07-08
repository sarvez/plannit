import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThingsToDoPage} from "./../things-to-do/things-to-do";
import { FriendsProvider } from "../../providers/friends/friends";
import { NearbyPage } from "../nearby/nearby";

/**
 * Generated class for the CreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  myPlan : any = {};
  tags:any = ['Cyam', 'Sarwez', 'Dinesh'];
  noOfDays : any = Array.from(Array(7).keys());
  fbFriendsList : any = [];
  minDate : any;
  autocompleteItems: any;
  suggestedFriends: any = [];
  acService:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public FriendsProvider: FriendsProvider) {
    this.myPlan.dateOfTrip = new Date().toISOString();
    this.minDate = new Date().toISOString();
    console.log(this.noOfDays)
    this.myPlan.durationOfStay = this.noOfDays[1];

  }

  ngOnInit() {
          this.acService = new google.maps.places.AutocompleteService();
          this.autocompleteItems = [];
          this.myPlan.location = '';
          //Passing 1 as of now, as Rias will walk through
          this.fbFriendsList = this.FriendsProvider.getFriendsList(1);
      }

  createTripForMe(){
    console.log('Request for trip creation')
    this.myPlan.tags = this.tags;
    console.log(this.myPlan)
    this.navCtrl.push(ThingsToDoPage,{
      trip : this.myPlan
    });

  }

  saveMyTrip(){
    console.log('Request for trip creation')
    console.log(this.myPlan)
    this.navCtrl.pop();
  }

  cancelMyTrip(){
    console.log('Cancel trip creation')
    console.log(this.myPlan)
    this.navCtrl.push(ThingsToDoPage, {"trip": this.myPlan});
    this.navCtrl.pop();
  }

  onChange(val){
    console.log(this.tags)
  }

  dismiss(){
    this.myPlan.location = '';
  }

  chooseItem(item: any) {
      console.log('modal > chooseItem > item > ', item);
      this.myPlan.location = item.description;
      this.autocompleteItems = [];
  }

  chooseFriend(friend: any) {
      console.log('modal > choosefriend ', friend);
      this.onChange(friend)
      this.suggestedFriends = [];
  }

  searchFriends(str): boolean{
    console.log('searhing friends..')
    console.log(str);
    console.log(this.tags)
    var d = document.getElementById('tagFriend');
    console.log(d)
      console.log(this.fbFriendsList)
    if (str == undefined || str == '') {
        this.suggestedFriends = [];
        return true;
    } else {
    if(this.fbFriendsList != undefined && this.fbFriendsList.length > 0)
      this.fbFriendsList.forEach(function (frnd) {
        console.log(frnd.name)
        if(frnd.name.includes(str)){
          this.suggestedFriends.push(frnd);
          console.log(this.suggestedFriends)
        }
      });
      return true;
    }
  }

  updateSearch() {
      console.log('modal > updateSearch');
      if (this.myPlan.location == '') {
          this.autocompleteItems = [];
          return;
      }
      let self = this;
      let config = {
          types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
          input: this.myPlan.location,
          componentRestrictions: { country: 'AE' }
      }
      this.acService.getPlacePredictions(config, function (predictions, status) {
          console.log('modal > getPlacePredictions > status > ', status);
          self.autocompleteItems = [];
          if(predictions != null){
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
          }

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
