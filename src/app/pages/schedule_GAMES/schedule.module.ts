import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SchedulePage } from './schedule';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import { SuecaComponent } from '../games/sueca/sueca.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule
  ],
  declarations: [
    SchedulePage,
    ScheduleFilterPage,
    SuecaComponent
  ],
  entryComponents: [
    ScheduleFilterPage
  ]
})
export class ScheduleModule { }
