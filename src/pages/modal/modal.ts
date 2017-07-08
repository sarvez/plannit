import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalContentPage {
  data;
  modalType;
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
    this.modalType = this.params
    this.data = this.params.get('data');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}