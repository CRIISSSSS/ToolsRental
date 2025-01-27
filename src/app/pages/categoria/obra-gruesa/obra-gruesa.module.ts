import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObraGruesaPageRoutingModule } from './obra-gruesa-routing.module';

import { ObraGruesaPage } from './obra-gruesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObraGruesaPageRoutingModule
  ],
  declarations: [ObraGruesaPage]
})
export class ObraGruesaPageModule {}
