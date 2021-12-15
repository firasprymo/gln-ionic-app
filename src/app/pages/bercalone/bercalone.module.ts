import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BercalonePageRoutingModule } from './bercalone-routing.module';

import { BercalonePage } from './bercalone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BercalonePageRoutingModule
  ],
  declarations: [BercalonePage]
})
export class BercalonePageModule {}
