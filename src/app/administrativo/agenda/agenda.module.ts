import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgCalendarModule} from 'ionic2-calendar';
import { AgendaPageRoutingModule } from './agenda-routing.module';


import { AgendaPage } from './agenda.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    NgCalendarModule,
    
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule {}
