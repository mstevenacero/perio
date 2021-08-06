import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoSintomaPage } from './nuevo-sintoma.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoSintomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoSintomaPageRoutingModule {}
