import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsUpdatedPage } from './settings-updated.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsUpdatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsUpdatedPageRoutingModule {}
