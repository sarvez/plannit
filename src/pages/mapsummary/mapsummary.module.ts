import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsummaryPage } from './mapsummary';

@NgModule({
  declarations: [
    MapsummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsummaryPage),
  ],
  exports: [
    MapsummaryPage
  ]
})
export class MapsummaryPageModule {}
