import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule_GAMES/schedule';
import { SuecaPage } from '../games/sueca/sueca.page'
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sueca',
        loadChildren: () => import('../games/sueca/sueca.module').then(m => m.SuecaPageModule)
      },
      {
        path: 'sueca-tutorial',
        loadChildren: () => import('../games/sueca-tutorial/sueca-tutorial.module').then(m => m.SuecaTutorialPageModule)
      },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

