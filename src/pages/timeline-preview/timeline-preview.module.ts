import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelinePreviewPage } from './timeline-preview';

@NgModule({
  declarations: [
    TimelinePreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinePreviewPage),
  ],
  exports: [
    TimelinePreviewPage
  ]
})
export class TimelinePreviewPageModule {}
