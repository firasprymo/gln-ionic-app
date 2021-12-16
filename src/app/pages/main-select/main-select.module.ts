import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSelectPageRoutingModule } from './main-select-routing.module';

import { MainSelectPage } from './main-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainSelectPageRoutingModule
  ],
  declarations: [MainSelectPage]
})
export class MainSelectPageModule {}
