import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'sueca',
    loadChildren: () => import('./pages/games/sueca/sueca.module').then( m => m.SuecaPageModule)
  },
  {
    path: 'sueca-tutorial',
    loadChildren: () => import('./pages/games/sueca-tutorial/sueca-tutorial.module').then( m => m.SuecaTutorialPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule_GAMES/schedule.module').then( m => m.ScheduleModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./pages/schedule_GAMES/schedule.module').then( m => m.ScheduleModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
