import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestVenuePage } from './test-venue.page';

const routes: Routes = [
  {
    path: '',
    component: TestVenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestVenuePageRoutingModule {}
