import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NativeStorage } from '@ionic-native/native-storage';


@Injectable()
export class UserProvider {
  _user: any;

  constructor(
    public http: Http, 
    public fb: Facebook,
    public nativeStorage: NativeStorage) {
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  doFbLogin(){
    let permissions = new Array<string>();
    //the permissions your facebook app needs from the user
    permissions = ['public_profile', 'user_friends', 'email'];
    return this.fb.login(permissions)
  }

}
