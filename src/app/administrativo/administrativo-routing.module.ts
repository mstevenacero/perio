import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativoPage } from './administrativo.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativoPage
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativoPageRoutingModule {}
