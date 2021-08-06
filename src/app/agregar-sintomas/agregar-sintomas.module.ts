import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarSintomasPageRoutingModule } from './agregar-sintomas-routing.module';

import { AgregarSintomasPage } from './agregar-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarSintomasPageRoutingModule
  ],
  declarations: [AgregarSintomasPage]
})
export class AgregarSintomasPageModule {}
