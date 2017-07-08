import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TodayComponent } from './today';

@NgModule({
  declarations: [
    TodayComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TodayComponent
  ]
})
export class TodayComponentModule {}
