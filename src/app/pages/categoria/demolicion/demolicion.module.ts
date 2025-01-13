import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemolicionPageRoutingModule } from './demolicion-routing.module';

import { DemolicionPage } from './demolicion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemolicionPageRoutingModule
  ],
  declarations: [DemolicionPage]
})
export class DemolicionPageModule {}
