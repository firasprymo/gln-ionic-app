import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'rsvp',
    loadChildren: () => import('./pages/rsvp-confirmation/rsvp-confirmation.module').then(m => m.RsvpConfirmationModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then(m => m.EventDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'settings-updated',
    loadChildren: () => import('./pages/settings-updated/settings-updated.module').then(m => m.SettingsUpdatedPageModule)
  },
  {
    path: 'vip',
    loadChildren: () => import('./pages/vip-table-request/vip-table-request.module').then(m => m.VipTableRequestPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'main-select',
    loadChildren: () => import('./pages/main-select/main-select.module').then(m => m.MainSelectPageModule)
  },
  {
    path: 'main-disabled',
    loadChildren: () => import('./pages/main-disabled/main-disabled.module').then(m => m.MainDisabledPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
