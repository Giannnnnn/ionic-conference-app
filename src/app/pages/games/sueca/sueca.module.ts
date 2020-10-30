import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuecaPageRoutingModule } from './sueca-routing.module';

import { SuecaPage } from './sueca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuecaPageRoutingModule,
  ],
  declarations: [SuecaPage]
})
export class SuecaPageModule {}
