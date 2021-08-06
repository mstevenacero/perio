import { Component } from '@angular/core';
import { UserServiceService}from'../app/servicios/user-service.service'

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CrudService } from './servicios/crud.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AngularFireAuth,
    private router:Router,
    
    private user:CrudService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  verifyCurrentUser(){
    this.auth.authState.subscribe((e:any)=>{
      if(e==null){
        this.router.navigate(['/autenticacion'])
      }else{
      
       this.user.setUid(e.uid)
        localStorage.setItem("uid", e.uid)

        this.router.navigate([''], {replaceUrl:true})
      }
    })
   }


}
