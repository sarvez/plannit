import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PlanIt } from './app.component';

import { Facebook } from '@ionic-native/facebook';

import { FriendsTimelinePage } from '../pages/friends-timeline/friends-timeline';

import { TimelinePage } from '../pages/timeline/timeline';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CreatePage } from '../pages/create/create';
import { LandingPage } from '../pages/landing/landing';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { ThingsToDoPage } from '../pages/things-to-do/things-to-do';
import { ModalContentPage } from '../pages/modal/modal';
import { MapsummaryPage } from '../pages/mapsummary/mapsummary';
import { NearbyPage } from '../pages/nearby/nearby';
import { TimelinePreviewPage } from '../pages/timeline-preview/timeline-preview';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TripsProvider } from '../providers/trips/trips';
import { AttractionsProvider } from '../providers/attractions/attractions';
import { UserProvider } from '../providers/user/user';
import { NativeStorage } from '@ionic-native/native-storage';
import { TodayComponent } from '../components/today/today';
import {ConfirmationScreenPage} from "../pages/confirmation-screen/confirmation-screen"

import {IonTagsInputModule} from "ionic-tags-input";
import { FriendsProvider } from '../providers/friends/friends';

@NgModule({
  declarations: [
    PlanIt,
    TabsPage,
    ProfilePage,
    TimelinePage,
    HomePage,
    CreatePage,
    LandingPage,
    UpcomingPage,
    TodayComponent,
    ThingsToDoPage,
    ModalContentPage,
    MapsummaryPage,
    NearbyPage,
    TimelinePreviewPage,
    ConfirmationScreenPage,
    FriendsTimelinePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(PlanIt),
    IonTagsInputModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PlanIt,
    TabsPage,
    ProfilePage,
    TimelinePage,
    HomePage,
    CreatePage,
    LandingPage,
    UpcomingPage,
    ThingsToDoPage,
    NearbyPage,
    MapsummaryPage,
    TimelinePreviewPage,
    ConfirmationScreenPage,
    FriendsTimelinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TripsProvider,
    AttractionsProvider,
    Facebook,
    UserProvider,
    NativeStorage,
    FriendsProvider
  ]
})
export class AppModule {}
