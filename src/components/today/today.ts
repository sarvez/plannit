import { Component } from '@angular/core';

/**
 * Generated class for the TodayComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'today',
  templateUrl: 'today.html'
})
export class TodayComponent {

  text: string;

  constructor() {
    console.log('Hello TodayComponent Component');
    this.text = 'Hello World';
  }

}
