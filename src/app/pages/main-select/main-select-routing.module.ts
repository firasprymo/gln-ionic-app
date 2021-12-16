import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSelectPage } from './main-select.page';

const routes: Routes = [
  {
    path: '',
    component: MainSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSelectPageRoutingModule {}
