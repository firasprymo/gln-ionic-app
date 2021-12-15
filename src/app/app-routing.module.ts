import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then(m => m.ConfirmationPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-details/event-details.module').then(m => m.EventDetailsPageModule)
  },
  {
    path: 'bercelone/:idCity',
    loadChildren: () => import('./pages/bercalone/bercalone.module').then(m => m.BercalonePageModule)
  },
  {
    path: 'disabled-event',
    loadChildren: () => import('./pages/disabled-event/disabled-event.module').then(m => m.DisabledEventPageModule)
  },
  {
    path: 'test-venue',
    loadChildren: () => import('./pages/test-venue/test-venue.module').then(m => m.TestVenuePageModule)
  },
  {
    path: 'vip-request',
    loadChildren: () => import('./pages/vip-request/vip-request.module').then( m => m.VipRequestPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'vip-table-request',
    loadChildren: () => import('./pages/vip-table-request/vip-table-request.module').then( m => m.VipTableRequestPageModule)
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
