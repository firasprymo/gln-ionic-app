import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VipTableRequestPageRoutingModule } from './vip-table-request-routing.module';

import { VipTableRequestPage } from './vip-table-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VipTableRequestPageRoutingModule
  ],
  declarations: [VipTableRequestPage]
})
export class VipTableRequestPageModule {}
