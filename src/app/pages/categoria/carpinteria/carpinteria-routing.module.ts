import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarpinteriaPage } from './carpinteria.page';

const routes: Routes = [
  {
    path: '',
    component: CarpinteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarpinteriaPageRoutingModule {}
