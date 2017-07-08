import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FriendsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FriendsProvider {

  friendsList : any = []
  constructor(public http: Http) {
    console.log('Hello FriendsProvider Provider');
    let friendsList = [
    {
        "id": "1",
        "name": "Mohamed Rias",
        "image": "assets/friends/1.jpg"
    },
    {
        "id": "2",
        "name": "Syamjith",
        "image": "assets/friends/2.jpg"
    },
    {
        "id": "3",
        "name": "Sarvezvaran",
        "image": "assets/friends/3.jpg"
    },
    {
        "id": "4",
        "name": "Manikandan",
        "image": "assets/friends/4.jpg"
    },
    {
        "id": "5",
        "name": "Dineshkumar Mohan",
        "image": "assets/friends/5.jpg"
    },
    {
        "id": "6",
        "name": "Karthick",
        "image": ""
    },
    {
        "id": "7",
        "name": "Amrutha",
        "image": ""
    },
    {
        "id": "8",
        "name": "Anusha",
        "image": ""
    },
    {
        "id": "9",
        "name": "Anusha",
        "image": ""
    },
    {
        "id": "10",
        "name": "Anusha",
        "image": ""
    }
    ];
    this.friendsList = friendsList;
  }

  getFriendsList(id:any){
    let friends: any=[];
    friends = this.friendsList.filter(friend => friend.id !=id);
    return friends;
  }

}
