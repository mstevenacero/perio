import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoSintomaPageRoutingModule } from './nuevo-sintoma-routing.module';

import { NuevoSintomaPage } from './nuevo-sintoma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoSintomaPageRoutingModule
  ],
  declarations: [NuevoSintomaPage]
})
export class NuevoSintomaPageModule {}
