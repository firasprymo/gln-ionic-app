import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BercalonePage } from './bercalone.page';

const routes: Routes = [
  {
    path: '',
    component: BercalonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BercalonePageRoutingModule {}
