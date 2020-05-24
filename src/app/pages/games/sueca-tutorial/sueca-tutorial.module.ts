import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuecaTutorialPageRoutingModule } from './sueca-tutorial-routing.module';

import { SuecaTutorialPage } from './sueca-tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuecaTutorialPageRoutingModule
  ],
  declarations: [SuecaTutorialPage]
})
export class SuecaTutorialPageModule {}
