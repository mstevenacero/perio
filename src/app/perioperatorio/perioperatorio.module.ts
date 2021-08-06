import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerioperatorioPageRoutingModule } from './perioperatorio-routing.module';

import { PerioperatorioPage } from './perioperatorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerioperatorioPageRoutingModule
  ],
  declarations: [PerioperatorioPage]
})
export class PerioperatorioPageModule {}
