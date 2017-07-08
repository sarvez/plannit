import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AttractionsProvider } from "../attractions/attractions"
/*
  Generated class for the TripsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TripsProvider {

  trips: any[] = []
  public currentTrip: any;

  constructor(public http: Http, public AttractionsProvider: AttractionsProvider) {
    console.log('Hello TripsProvider Provider');

    let trip = {
      "id": "1",
      "title": "Trip to Abu Dhabi",
      "creator": "mohamedrias",
      "createdDate": "06/07/2017",
      "plannedDate": "07/08/2017",
      "tripSummary": "../../assets/map/map1.jpeg",
      "participants": ["mohamedrias", "syamjith", "manikandan", "dineshkumar"],
      "attractionsDetails": {},
      "attractions": [{
        "attractionid": "7",
        "startTime": "9:00 AM",
        "endTime": "12:30 AM"
      }, {
        "attractionid": "8",
        "startTime": "1:30 PM",
        "endTime": "3:20 PM"
      }, {
        "attractionid": "9",
        "startTime": "3:30 PM",
        "endTime": "5:40 PM"
      }, {
        "attractionid": "10",
        "startTime": "6:10 PM",
        "endTime": "8:40 PM"
      }
      ]
    };
    trip.attractionsDetails = this.getAttractions(trip.attractions);
    this.trips.push(trip);
    trip = {
      "id": "2",
      "title": "Ras al-Khaimah",
      "creator": "mohamedrias",
      "createdDate": "06/07/2016",
      "plannedDate": "07/07/2018",
      "tripSummary": "../../assets/map/map2.jpeg",
      "participants": ["mohamedrias", "syamjith", "manikandan", "dineshkumar"],
      "attractionsDetails": {},
      "attractions": [{
        "attractionid": "11",
        "startTime": "8:00 AM",
        "endTime": "11:30 AM"
      }, {
        "attractionid": "12",
        "startTime": "12:00 PM",
        "endTime": "1:20 PM"
      }, {
        "attractionid": "13",
        "startTime": "1:30 PM",
        "endTime": "4:20 PM"
      }]
    };
    trip.attractionsDetails = this.getAttractions(trip.attractions);
    this.trips.push(trip);
    trip = {
      "id": "3",
      "title": "Dubai Trip",
      "creator": "mohamedrias",
      "createdDate": "06/07/2016",
      "plannedDate": "07/07/2016",
      "tripSummary": "../../assets/map/map3.jpeg",
      "participants": ["mohamedrias", "syamjith", "manikandan", "dineshkumar"],
      "attractionsDetails": {},
      "attractions": [{
        "attractionid": "4",
        "startTime": "10:00 AM",
        "endTime": "11:30 AM"
      }, {
        "attractionid": "5",
        "startTime": "12:30 PM",
        "endTime": "5:20 PM"
      }]
    };
    trip.attractionsDetails = this.getAttractions(trip.attractions);
    this.trips.push(trip);
    trip = {
      "id": "4",
      "title": "Dubai Trip",
      "creator": "mohamedrias",
      "createdDate": "06/07/2016",
      "plannedDate": "07/07/2016",
      "tripSummary": "../../assets/map/map4.jpeg",
      "participants": ["mohamedrias", "syamjith", "manikandan", "dineshkumar"],
      "attractionsDetails": {},
      "attractions": [{
        "attractionid": "2",
        "startTime": "10:00 AM",
        "endTime": "11:30 AM"
      }, {
        "attractionid": "3",
        "startTime": "12:30 PM",
        "endTime": "5:20 PM"
      }]
    };
    trip.attractionsDetails = this.getAttractions(trip.attractions);
    this.trips.push(trip);
    trip = {
      "id": "5",
      "title": "Dubai Trip",
      "creator": "mohamedrias",
      "createdDate": "06/07/2016",
      "plannedDate": "07/07/2018",
      "tripSummary": "../../assets/map/map5.jpeg",
      "participants": ["mohamedrias", "syamjith", "manikandan", "dineshkumar"],
      "attractionsDetails": {},
      "attractions": [{
        "attractionid": "4",
        "startTime": "10:00 AM",
        "endTime": "11:30 AM"
      }, {
        "attractionid": "1",
        "startTime": "12:30 PM",
        "endTime": "5:20 PM"
      }]
    };
    trip.attractionsDetails = this.getAttractions(trip.attractions);
    this.trips.push(trip);
    trip = {
      "id": "6",
      "title": "Dubai Trip",
      "creator": "mohamedrias",
      "createdDate": "06/07/2016",
      "plannedDate": "07/07/2018",
      "tripSummary": "../../assets/map/map6.jpeg",
      "participants": ["mohamedrias", "syamjith", "manikandan", "dineshkumar"],
      "attractionsDetails": {},
      "attractions": [{
        "attractionid": "5",
        "startTime": "10:00 AM",
        "endTime": "11:30 AM"
      }, {
        "attractionid": "6",
        "startTime": "12:30 PM",
        "endTime": "5:20 PM"
      }]
    };
    trip.attractionsDetails = this.getAttractions(trip.attractions);
    this.trips.push(trip);
  }

  getTrips() {
    return this.trips;
  }


  saveTrip(trip: any) {
    let index = this.trips.indexOf(item => item.id == trip.id)
    if (index != -1) {
      this.trips[index] = trip;
    }
  }

  getAttractions(attractions: any) {
    let ids: any[] = [];
    for (let entry of attractions) {
      ids.push(entry.attractionid);
    }
    let attractionsDetails = this.AttractionsProvider.getAttractions(ids);
    for (let attraction of attractionsDetails) {
      for (let entry of attractions) {
        if (attraction.id == entry.attractionid) {
          attraction.startTime = entry.startTime;
          attraction.endTime = entry.endTime
        }
      }
    }
    return attractionsDetails;
  }

}
