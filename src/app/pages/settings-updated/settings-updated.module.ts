import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsUpdatedPageRoutingModule } from './settings-updated-routing.module';

import { SettingsUpdatedPage } from './settings-updated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsUpdatedPageRoutingModule
  ],
  declarations: [SettingsUpdatedPage]
})
export class SettingsUpdatedPageModule {}
