import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerioperatorioPage } from './perioperatorio.page';

const routes: Routes = [
  {
    path: '',
    component: PerioperatorioPage
  },
  {
    path: 'detallesperio',
    loadChildren: () => import('./detallesperio/detallesperio.module').then( m => m.DetallesperioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerioperatorioPageRoutingModule {}
