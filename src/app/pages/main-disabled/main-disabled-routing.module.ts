import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDisabledPage } from './main-disabled.page';

const routes: Routes = [
  {
    path: '',
    component: MainDisabledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDisabledPageRoutingModule {}
