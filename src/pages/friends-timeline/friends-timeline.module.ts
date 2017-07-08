import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsTimelinePage } from './friends-timeline';

@NgModule({
  declarations: [
    FriendsTimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsTimelinePage),
  ],
  exports: [
    FriendsTimelinePage
  ]
})
export class FriendsTimelinePageModule {}
