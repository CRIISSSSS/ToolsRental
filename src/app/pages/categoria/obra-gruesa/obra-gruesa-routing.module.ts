import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObraGruesaPage } from './obra-gruesa.page';

const routes: Routes = [
  {
    path: '',
    component: ObraGruesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObraGruesaPageRoutingModule {}
