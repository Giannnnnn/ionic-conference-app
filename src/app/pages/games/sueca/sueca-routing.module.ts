import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuecaPage } from './sueca.page';

const routes: Routes = [
  {
    path: '',
    component: SuecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuecaPageRoutingModule {}
