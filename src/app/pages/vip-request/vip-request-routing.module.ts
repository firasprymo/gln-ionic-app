import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VipRequestPage } from './vip-request.page';

const routes: Routes = [
  {
    path: '',
    component: VipRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VipRequestPageRoutingModule {}
