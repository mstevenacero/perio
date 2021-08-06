import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CrudService } from '../servicios/crud.service';
import { UserService } from '../servicios/user.service';



@Component({
  selector: 'app-agregar-sintomas',
  templateUrl: './agregar-sintomas.page.html',
  styleUrls: ['./agregar-sintomas.page.scss'],
})
export class AgregarSintomasPage implements OnInit {

  name:string='';
  number:string=''
  uid: string;
  contactId:string;
  constructor(private db:AngularFireDatabase, private user:CrudService, 
    private active:ActivatedRoute, 
   
    ) {
      this.uid = localStorage.getItem('uid')

      active.params.subscribe(key=>{
        console.log(key);
        if(key.id!=null){
          this.contactId = key.id;
          db.database.ref('list/'+this.uid+"/"+key.id).once('value', (snap)=>{
            console.log(snap.val());
            this.name = snap.val().name
            this.number = snap.val().number
          })
        }
      })
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
