import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { nextTick, title } from 'process';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  show:boolean=false;

  eventSource = [];
  viewTitle: string;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    noEventslabel:"Eventos disponibles"
  };
 
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
 
  dateMinum=new Date().toISOString();
  monEvent={

    title:"",
    desc:"",
    dayEvent:"",
    allDay:false
  }


  constructor() { }

  ngOnInit() {
    this.monEvent={
     
    title:"",
    desc:"",
    dayEvent:new Date().toISOString(),
    allDay:false


    }
    
  }
  next(){

    this.myCal.slideNext();
  }

  back(){

    this.myCal.slidePrev();  
  }
  onViewTitleChanged(title){

    this.viewTitle=title;
  }

//adjuntar//añadir//cita 

agregar(){
  let  values={
    
    title:"hola",
    desc:this.monEvent.desc,
    dayEvent: new Date(this.monEvent.dayEvent),
    allDay:false



  }
  this.eventSource.push(values);

  
  this.myCal.loadEvents();
 console.log(this.myCal)
  

}

}
