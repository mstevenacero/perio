import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesperioPage } from './detallesperio.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesperioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesperioPageRoutingModule {}
