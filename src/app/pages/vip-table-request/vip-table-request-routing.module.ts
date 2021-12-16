import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VipTableRequestPage } from './vip-table-request.page';

const routes: Routes = [
  {
    path: '',
    component: VipTableRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VipTableRequestPageRoutingModule {}
