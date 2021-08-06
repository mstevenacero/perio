import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarSintomasPage } from './agregar-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarSintomasPageRoutingModule {}
