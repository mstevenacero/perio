import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CrudService } from '../servicios/crud.service';

@Component({
  selector: 'app-nuevo-sintoma',
  templateUrl: './nuevo-sintoma.page.html',
  styleUrls: ['./nuevo-sintoma.page.scss'],
})
export class NuevoSintomaPage implements OnInit {

  name:string='';
  number:string=''
  uid: string;
  contactId:string;
  constructor(private db:AngularFireDatabase, private user:CrudService, 
    private active:ActivatedRoute, 
   ) {
     

    }
    save(){
      this.db.database.ref('list/'+this.uid).push({name:this.name, number:this.number}).then(()=>{
        this.name="";
        this.number=""
      })
      .catch(e=>{
        console.log(e);
      })
    }
  
  
    update(){
      this.db.database.ref('list/'+this.uid+'/'+this.contactId).set({name:this.name, number:this.number}).then(()=>{
        this.name="";
        this.number=""
      })
      .catch(e=>{
        console.log(e);
      })
    }







  ngOnInit() {
  }

}
