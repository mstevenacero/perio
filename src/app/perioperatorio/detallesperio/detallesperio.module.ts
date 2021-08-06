import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesperioPageRoutingModule } from './detallesperio-routing.module';

import { DetallesperioPage } from './detallesperio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesperioPageRoutingModule
  ],
  declarations: [DetallesperioPage]
})
export class DetallesperioPageModule {}
