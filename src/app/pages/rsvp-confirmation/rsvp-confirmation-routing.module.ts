import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RsvpConfirmationPage } from './rsvp-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: RsvpConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPageRoutingModule {}
