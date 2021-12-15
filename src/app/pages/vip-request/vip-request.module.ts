import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VipRequestPageRoutingModule } from './vip-request-routing.module';

import { VipRequestPage } from './vip-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VipRequestPageRoutingModule
  ],
  declarations: [VipRequestPage]
})
export class VipRequestPageModule {}
