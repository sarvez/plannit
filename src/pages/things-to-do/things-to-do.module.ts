import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThingsToDoPage } from './things-to-do';

@NgModule({
  declarations: [
    ThingsToDoPage,
  ],
  imports: [
    IonicPageModule.forChild(ThingsToDoPage),
  ],
  exports: [
    ThingsToDoPage
  ]
})
export class ThingsToDoPageModule {}
