import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemolicionPage } from './demolicion.page';

const routes: Routes = [
  {
    path: '',
    component: DemolicionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemolicionPageRoutingModule {}
