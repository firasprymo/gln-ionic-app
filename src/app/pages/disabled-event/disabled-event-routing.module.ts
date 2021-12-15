import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisabledEventPage } from './disabled-event.page';

const routes: Routes = [
  {
    path: '',
    component: DisabledEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisabledEventPageRoutingModule {}
