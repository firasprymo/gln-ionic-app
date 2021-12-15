import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisabledEventPageRoutingModule } from './disabled-event-routing.module';

import { DisabledEventPage } from './disabled-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisabledEventPageRoutingModule
  ],
  declarations: [DisabledEventPage]
})
export class DisabledEventPageModule {}
