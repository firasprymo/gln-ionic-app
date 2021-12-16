import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainDisabledPageRoutingModule } from './main-disabled-routing.module';

import { MainDisabledPage } from './main-disabled.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainDisabledPageRoutingModule
  ],
  declarations: [MainDisabledPage]
})
export class MainDisabledPageModule {}
