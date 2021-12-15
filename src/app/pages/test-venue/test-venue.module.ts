import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestVenuePageRoutingModule } from './test-venue-routing.module';

import { TestVenuePage } from './test-venue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestVenuePageRoutingModule
  ],
  declarations: [TestVenuePage]
})
export class TestVenuePageModule {}
