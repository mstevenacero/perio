import { LocalNotifications } from '@ionic-native/local-notifications';
import {CrudService} from '../servicios/crud.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {
  Component,
  OnInit
} from '@angular/core';
import { AlertController } from '@ionic/angular';
import{Router}from'@angular/router'


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {
  itemRef: any;
  contacts = [];
  uid: string;
  constructor(private db: AngularFireDatabase, private user:CrudService, 
    private alert:AlertController,
    private router:Router) {
    this.uid = localStorage.getItem("uid")
  }

  ngOnInit() {
    this.itemRef = this.db.object('list/' + this.uid);
    console.log(this.uid);
    this.itemRef.snapshotChanges().subscribe(action => {
    
      let data = action.payload.val();
      this.contacts = [];
      console.log(data);
      for (let k in data) {
        let user = data[k];
        user.key = k;
        console.log(user);
        this.contacts.push(user)
      }
    });

  }

 

  async deleteConfirm(key) {
    const alert = await this.alert.create({
      header: 'Espera!',
      message: 'Este contacto se eliminara de tu lista. Quieres continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
            this.db.database.ref('list/'+this.uid+'/'+key).remove();
          }
        }
      ]
    });
 

  

  }
  addSintoma(){
    this.router.navigate(['/agregar-sintomas']);
  }
}
