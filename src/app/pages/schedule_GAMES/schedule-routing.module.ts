import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulePage } from './schedule';
import { SuecaComponent } from '../games/sueca/sueca.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage,
    children: [
      {
        path: '/sueca',
        loadChildren:  '../games/sueca/sueca.component'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulePageRoutingModule { }
