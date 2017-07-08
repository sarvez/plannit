import { Component } from '@angular/core';

import { TimelinePage } from '../timeline/timeline';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimelinePage;
  tab2Root = HomePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
