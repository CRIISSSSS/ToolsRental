import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarpinteriaPageRoutingModule } from './carpinteria-routing.module';

import { CarpinteriaPage } from './carpinteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarpinteriaPageRoutingModule
  ],
  declarations: [CarpinteriaPage]
})
export class CarpinteriaPageModule {}
